import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
/**
 * @todo npm i feed
 * @see https://github.com/jpmonette/feed
 */
// import { Feed } from "feed";

/**
 * @todo Maybe instantiate the new Feed() object here?
 * @see https://github.com/jpmonette/feed#example
 */
// const feed = new Feed({
//   title: "Feed Title",
//   description: "This is my personal feed!",
//   id: "http://example.com/",
//   link: "http://example.com/",
//   language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
//   image: "http://example.com/image.png",
//   favicon: "http://example.com/favicon.ico",
//   copyright: "All rights reserved 2013, John Doe",
//   updated: new Date(2013, 6, 14), // optional, default = today
//   generator: "awesome", // optional, default = 'Feed for Node.js'
//   feedLinks: {
//     json: "https://example.com/json",
//     atom: "https://example.com/atom"
//   },
//   author: {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     link: "https://example.com/johndoe"
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
//         name: "Jane Doe",
//         email: "janedoe@example.com",
//         link: "https://example.com/janedoe"
//       },
//       {
//         name: "Joe Smith",
//         email: "joesmith@example.com",
//         link: "https://example.com/joesmith"
//       }
//     ],
//     contributor: [
//       {
//         name: "Shawn Kemp",
//         email: "shawnkemp@example.com",
//         link: "https://example.com/shawnkemp"
//       },
//       {
//         name: "Reggie Miller",
//         email: "reggiemiller@example.com",
//         link: "https://example.com/reggiemiller"
//       }
//     ],
//     date: post.date,
//     image: post.image
//   });
// });

// feed.addCategory("Technologie");

// feed.addContributor({
//   name: "Johan Cruyff",
//   email: "johancruyff@example.com",
//   link: "https://example.com/johancruyff"
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
