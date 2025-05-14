import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';

const title = 'Runrig';
const defaultObjectType = 'website';
const canonical = 'https://www.runrig.org';
const logo = '/emoji_u1f69c.svg';
const cardImage = `${canonical}/open_field_system.png`;
const description = `
  Runrig is a communal farming platform, a libre software project and
  a method of socio-ecological design. It aims for collective sovereignty over
  not just our food, but also the labor that raises it, the land and living
  things that support it, and the data connecting connecting it all.
`.replaceAll(/\s+/g, ' ').trim();

export default defineConfig({
  srcDir: './',
  cacheDir: './.cache',
  outDir: './dist',
  title,
  description,
  head: [
    ['link', { rel: 'icon', href: logo }],
    ['link', { rel: 'canonical', href: canonical }],
    /**
     * OPEN GRAPH META TAGS
     * @see https://ogp.me/
     */
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:type', content: defaultObjectType }],
    ['meta', { property: 'og:url', content: canonical }],
    ['meta', { property: 'og:image', content: cardImage }],
    ['meta', { property: 'og:description', content: description }],

    /**
     * TWITTER CARD META TAGS
     * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
     */
    ['meta', { property: 'twitter:title', content: title }],
    ['meta', { property: 'twitter:card', content: defaultObjectType }],
    ['meta', { property: 'twitter:image', content: cardImage }],
    ['meta', { property: 'twitter:description', content: description }],
    // If we create a Twitter account, we can use this meta tag as well.
    // ['meta', { property: 'twitter:creator', content: '@runrig_coop' }],
  ],
  themeConfig: {
    siteTitle: title,
    logo,
    nav: [
      {
        text: 'The Plan',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Ecology', link: '/ecology' },
          { text: 'Architecture', link: '/architecture' },
          {
            items: [
              { text: 'Journal', link: '/journal' },
            ],
          }
        ],
      },
      {
        text: 'About',
        items: [
          { text: 'Get Involved', link: '/get-involved' },
          { text: 'Roadmap 2024', link: '/roadmap-2024' },
          { text: 'Contact', link: '/contact' },
        ],
      },
    ],
  },
  rewrites: {
    "posts/journal/:slug*": "journal/:slug*",
    "pages/:slug": ":slug",
  },
  markdown: {
    config(md) {
      md.use(footnote_plugin);
    }
  },
});
