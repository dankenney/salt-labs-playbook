/**
 * Controlled tag vocabulary. Add a tag here before using it in frontmatter;
 * the build fails on unknown tags (see src/components/PageTitle.astro).
 */
export const TAGS: Record<string, string> = {
	'ghg-accounting': 'GHG accounting',
	'scope-3': 'Scope 3',
	'emission-factors': 'Emission factors',
	'supplier-data': 'Supplier data',
	extraction: 'Document extraction',
	csrd: 'CSRD',
	esrs: 'ESRS',
	materiality: 'Materiality',
	issb: 'ISSB / IFRS S2',
	california: 'California SB 253/261',
	cdp: 'CDP',
	'transition-plans': 'Scenarios & transition plans',
	'eu-taxonomy': 'EU Taxonomy',
	assurance: 'Assurance',
	'evidence-packs': 'Evidence packs',
	testing: 'Testing procedures',
	regulatory: 'Regulatory',
	'business-development': 'Business development',
	prompts: 'Prompts',
	agents: 'Agents & workflows',
	evals: 'Evals',
	mcp: 'MCP & connectors',
	governance: 'Governance',
	quality: 'Quality controls',
	confidentiality: 'Confidentiality',
	independence: 'Independence',
	tools: 'Tools',
	'operating-model': 'Operating model',
	adoption: 'Adoption',
	metrics: 'Metrics',
	'reference-build': 'Reference build',
	ideas: 'Ideas',
	glossary: 'Glossary',
	maintenance: 'Maintenance',
};

export const tagLabel = (t: string) => TAGS[t] ?? t;
export const tagHref = (t: string) => `/tags/${t}/`;

/** Returns true when a page is past its review window. */
export function isOverdue(reviewed: Date, months: number, now = new Date()): boolean {
	const due = new Date(reviewed);
	due.setUTCMonth(due.getUTCMonth() + months);
	return now > due;
}
