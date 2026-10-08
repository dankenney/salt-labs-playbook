import type { APIRoute } from 'astro';

// Disallow everything unless PLAYBOOK_INDEXABLE=true at build time.
export const GET: APIRoute = () => {
	const indexable = process.env.PLAYBOOK_INDEXABLE === 'true';
	const body = indexable ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n';
	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
