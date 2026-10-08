#!/usr/bin/env node
// Lists playbook pages whose `reviewed` date is older than `reviewEveryMonths` (default 6).
// Usage: npm run review:due            (all pages, overdue first)
//        npm run review:due -- --within 30   (also show pages due in the next 30 days)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../src/content/docs/', import.meta.url).pathname;
const withinIdx = process.argv.indexOf('--within');
const withinDays = withinIdx > -1 ? Number(process.argv[withinIdx + 1]) : 0;

const walk = (d) => readdirSync(d).flatMap((f) => {
	const p = join(d, f);
	return statSync(p).isDirectory() ? walk(p) : /\.mdx?$/.test(f) ? [p] : [];
});

const now = new Date();
const rows = [];
for (const file of walk(ROOT)) {
	const fm = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/);
	if (!fm) continue;
	const get = (k) => fm[1].match(new RegExp(`^${k}:\\s*(.+)$`, 'm'))?.[1]?.trim().replace(/^["']|["']$/g, '');
	const reviewed = get('reviewed');
	if (!reviewed) { rows.push({ file, status: 'MISSING reviewed', due: null }); continue; }
	const months = Number(get('reviewEveryMonths') ?? 6);
	const due = new Date(reviewed); due.setUTCMonth(due.getUTCMonth() + months);
	const days = Math.round((due - now) / 864e5);
	rows.push({ file, reviewed, months, due, days, title: get('title') });
}
rows.sort((a, b) => (a.days ?? -1e9) - (b.days ?? -1e9));
let overdue = 0;
console.log('Page'.padEnd(58), 'Reviewed'.padEnd(11), 'Every', 'Due in (days)');
for (const r of rows) {
	if (r.status) { console.log(relative(ROOT, r.file).padEnd(58), r.status); overdue++; continue; }
	if (r.days < 0) overdue++;
	if (r.days < 0 || r.days <= withinDays || withinIdx === -1)
		console.log(relative(ROOT, r.file).padEnd(58), r.reviewed.padEnd(11), `${r.months}m`.padEnd(5), r.days < 0 ? `OVERDUE (${-r.days})` : r.days);
}
console.log(`\n${rows.length} pages, ${overdue} overdue or missing a review date.`);
