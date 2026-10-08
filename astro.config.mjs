// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// Deployment knobs (all optional; see MAINTAINING.md → "Hosting & deployment"):
//   SITE_URL            canonical origin, default https://playbook.besaltlabs.ai
//   PLAYBOOK_INDEXABLE  'true' lets search engines index the site. Default: noindex + robots.txt Disallow.
const SITE_URL = process.env.SITE_URL || 'https://playbook.besaltlabs.ai';
const INDEXABLE = process.env.PLAYBOOK_INDEXABLE === 'true';

export default defineConfig({
	site: SITE_URL,
	integrations: [
		starlight({
			title: 'Salt Labs · AI-First Sustainability Playbook',
			description:
				'A Salt Labs working playbook: practical, tactical guidance for running a climate change and sustainability practice AI-first.',
			logo: { src: './src/assets/mark.svg', alt: 'Salt Labs' },
			favicon: '/favicon.svg',
			lastUpdated: false,
			pagination: true,
			credits: false,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			customCss: [
				'@fontsource-variable/inter',
				'@fontsource-variable/fraunces',
				'@fontsource-variable/jetbrains-mono',
				'./src/styles/theme.css',
			],
			head: [
				...(INDEXABLE ? [] : [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow, noarchive' } }]),
				{ tag: 'meta', attrs: { name: 'referrer', content: 'no-referrer' } },
				{ tag: 'meta', attrs: { name: 'author', content: 'Salt Labs' } },
			],
			components: {
				PageTitle: './src/components/PageTitle.astro',
				Footer: './src/components/Footer.astro',
			},
			expressiveCode: {
				defaultProps: { wrap: true, preserveIndent: true },
				themes: ['github-dark-dimmed', 'github-light'],
				styleOverrides: {
					borderRadius: '0.6rem',
					codeFontFamily: "'JetBrains Mono Variable', ui-monospace, monospace",
					codeFontSize: '0.84rem',
				},
			},
			plugins: [starlightLinksValidator({ errorOnRelativeLinks: false, exclude: ['/tags/', '/tags/**/*'] })],
			sidebar: [
				{ label: 'Start here', items: [{ autogenerate: { directory: 'start-here' } }] },
				{ label: 'Use-case playbooks', items: [{ autogenerate: { directory: 'playbooks' } }] },
				{ label: 'Prompt & agent library', items: [{ autogenerate: { directory: 'prompts' } }] },
				{ label: 'Quality, risk & ethics', items: [{ autogenerate: { directory: 'quality-risk' } }] },
				{ label: 'Tools landscape', items: [{ autogenerate: { directory: 'tools' } }] },
				{ label: 'Reference build', items: [{ autogenerate: { directory: 'reference-build' } }] },
				{ label: 'Ideas inbox', items: [{ autogenerate: { directory: 'ideas' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }, { label: 'Browse by tag', link: '/tags/' }] },
				{ label: 'Updates', items: [{ autogenerate: { directory: 'updates' } }] },
				{ label: 'Maintaining', collapsed: true, items: [{ autogenerate: { directory: 'maintaining' } }] },
			],
		}),
	],
});
