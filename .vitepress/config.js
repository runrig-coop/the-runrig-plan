import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
/**
 * @todo npm i feed
 * @see https://github.com/jpmonette/feed
 */
// import { Feed } from 'feed';

/**
 * @todo Maybe instantiate the new Feed() object here?
 * @see https://github.com/jpmonette/feed#example
 */
// const feed = new Feed({
//   title: 'The Runrig Plan',
//   description: 'All bi-weekly publications from Runrig, including The Runrig Plan, The Runrig Journal, and Technical Reports',
//   id: 'https://runrig.org/',
//   link: 'https://runrig.org/',
//   language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
//   image: 'https://www.runrig.org/open_field_system.png',
//   favicon: 'https://runrig.org/emoji_u1f69c.svg',
//   copyright: 'All content is licensed under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International Deed (CC BY-SA 4.0)</a> by Runrig and its respective authors.',
//   // updated: new Date(2013, 6, 14), // optional, default = today
//   // generator: 'awesome', // optional, default = 'Feed for Node.js'
//   feedLinks: {
//     json: 'https://runrig.org/json',
//     atom: 'https://runrig.org/atom'
//   },
//   author: {
//     name: 'The Runrig Team',
//     email: 'jamie@runrig.org',
//     link: 'https://runrig.org/about'
//   }
// });

// posts.forEach(post => {
//   feed.addItem({
//     title: post.title,
//     id: post.url,
//     link: post.url,
//     description: post.description,
//     content: post.content,
//     author: [
//       {
//         name: 'Jamie Gaehring',
//         email: 'jamie@runrig.org',
//         link: 'https://jgaehring.com/'
//       },
//     ],
//     contributor: [
//       {
//         name: 'The Runrig Team',
//         email: 'jamie@runrig.org',
//         link: 'https://runrig.org/about'
//       },
//     ],
//     date: post.date,
//     image: post.image
//   });
// });

// feed.addCategory('Technologie');

// feed.addContributor({
//   name: 'Jamie Gaehring',
//   email: 'jamie@runrig.org',
//   link: 'https://jgaehring.com/'
// });

// console.log(feed.rss2());
// // Output: RSS 2.0

// console.log(feed.atom1());
// // Output: Atom 1.0

// console.log(feed.json1());
// // Output: JSON Feed 1.0


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
        text: 'Documents',
        items: [
          { text: 'The Runrig Plan', link: '/plan/runrig-a-plan-for-socio-ecological-design' },
          { text: 'Journal', link: '/journal' },
          { text: 'Archive', link: '/archive' },
        ],
      },
      {
        text: 'About',
        items: [
          { text: 'What is Runrig?', link: '/about' },
          { text: 'Get Involved', link: '/get-involved' },
        ],
      },
    ],
  },
  rewrites: {
    'content/journal/:slug*': 'journal/:slug*',
    'content/plan/:slug*': 'plan/:slug*',
    'content/archive/:slug*': 'archive/:slug*',
    'content/projects/:slug*': 'projects/:slug*',
    'pages/:slug': ':slug',
  },
  markdown: {
    config(md) {
      md.use(footnote_plugin);
    }
  },
  async transformHead(ctx) {
    const { frontmatter, relativePath, filePath } = ctx.pageData;
    /**
     * @todo Write metadata to feed.rss for each page
     * @see https://vitepress.dev/reference/site-config#transformhead
     */
  },
});
