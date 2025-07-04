import fs from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
import { Feed } from 'feed';
import * as cheerio from 'cheerio';

const title = 'Runrig';
const defaultObjectType = 'website';
const canonical = 'https://www.runrig.org';
const logo = '/emoji_u1f69c.svg';
const logoUrl = canonical + logo;
const cardImage = `${canonical}/open_field_system.png`;
const description = `
  Runrig is a communal farming platform, a libre software project and
  a method of socio-ecological design. It aims for collective sovereignty over
  not just our food, but also the labor that raises it, the land and living
  things that support it, and the data connecting connecting it all.
`.replaceAll(/\s+/g, ' ').trim();

const team = {
  name: 'The Runrig Team',
  email: 'jamie@runrig.org',
  link: `${canonical}/about`,
};
const jamie = {
  name: 'Jamie Gaehring',
  email: 'jamie@runrig.org',
  link: 'https://jgaehring.com/',
};

const outDir =  './dist';

const feedSubdir = 'feed';
const feedFilenameEntries = [
  ['atom', 'atom.xml'],
  ['json', 'feed.json'],
  ['rss', 'rss.xml'],
];

// Just like Object.fromEntries(), but as a callback Array.reduce() will accept.
const fromEntries = (obj, [k, v]) => ({ ...obj, [k]: v });

// Filter out the RSS feed and transform the feeds into consistent URLs.
const toFeedUrl = filename => `${canonical}/${feedSubdir}/${filename}`;
/** @type {{ atom: string, json: string }} */
const feedLinks = feedFilenameEntries
  .filter(([format]) => format !== 'rss')
  .map(([fmt, file]) => [fmt, toFeedUrl(file)])
  .reduce(fromEntries, {});

// Transform the feeds into consisten file paths that correspond to the URLs.
const toFeedPathname = filename => `${outDir}/${feedSubdir}/${filename}`;
/** @type {{ atom: string, json: string, rss: string }} */
const feedPathnames = feedFilenameEntries
  .map(([fmt, file]) => [fmt, toFeedPathname(file)])
  .reduce(fromEntries, {});

const feed = new Feed({
  title: 'The Runrig Plan',
  description: 'All bi-weekly publications from Runrig, including The Runrig Plan, The Runrig Journal, and Technical Reports',
  id: canonical,
  link: canonical,
  language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: cardImage,
  favicon: logoUrl,
  copyright: 'Except where otherwise noted, content on this site is licensed by its authors under CC BY-SA 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/4.0/ .',
  // updated: new Date(2013, 6, 14), // optional, default = today
  // generator: 'awesome', // optional, default = 'Feed for Node.js'
  feedLinks,
  author: team,
});

export default defineConfig({
  srcDir: './',
  cacheDir: './.cache',
  outDir,
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
      { text: 'The Plan', link: '/posts/the-runrig-plan-for-socio-ecological-design' },
      { text: 'Journal', link: '/journal' },
      {
        text: 'About',
        items: [
          { text: 'What is Runrig?', link: '/about' },
          { text: 'Get Involved', link: '/get-involved' },
        ],
      },
    ],
    footer: {
      copyright: 'Except where noted, content on this site is licensed by its authors under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution-ShareAlike 4.0 International Deed (CC BY-SA 4.0)</a>.',
    },
  },
  rewrites: {
    'pages/:slug': ':slug',
  },
  markdown: {
    config(md) {
      md.use(footnote_plugin);
    }
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/RRFooter.vue', import.meta.url)
          )
        }
      ],
    },
  },
  async transformHead(ctx) {
    const { frontmatter: fm, relativePath } = ctx.pageData;
    const isValidFeedItem = !!fm && typeof fm === 'object'
      && !!fm.title
      && !!fm.date;
    if (!isValidFeedItem) return;

    const mdExtRegex = /\.(md|txt|markdown)$/g;
    const link = `${canonical}/${relativePath}`.replace(mdExtRegex, '.html');

    const author = [];
    if (!!fm.author && typeof fm.author === 'object') author.concat(fm.author)
    if (author.length === 0) author.push(jamie);

    const contributor = [];
    if (!!fm.contributor && typeof fm.contributor === 'object') {
      contributor.concat(fm.contributor);
    }

    const date = fm.date ? new Date(fm.date) : new Date();

    // A quick'n'dirty means of replacing all relative links in HTML attributes,
    // primarily on <a> and <img> elements in the body.
    const relPathRegex = /(href|src)="([\/#])([\w-_%#~:\/\.]*)"/g
    const relPathReplacer = (match, attr, hashOrSlash, tagOrFrag) => {
      if (attr === 'href' && hashOrSlash === '#') {
        return `href="${link}#${tagOrFrag}"`;
      }
      return `${attr}="${canonical}${hashOrSlash}${tagOrFrag}"`;
    };
    // Use Cheerio.js to isolate the main content of the page w/o the main nav
    // headers, asides, etc. This will render more cleanly w/o stylesheets in
    // most feed readers.
    const $ = cheerio.load(ctx.content);
    const main = $('#VPContent .content-container main');
    // The title & subtitle need to be added back manually from the frontmatter
    // fields, as they are in the RRPostHeader component for rendering pages.
    // A few older posts like "Roadmap 2024," however, do still have an h1
    // title in the main body, so check just to be sure.
    let header = '';
    if (main.has('h1').length < 1 && fm.title) {
      const title = `<h1>${fm.title}</h1>`;
      const sub = fm.subtitle ? `<p><strong>${fm.subtitle}</strong></p>` : '';
      header = `<header>${title}${sub}</header>`;
    }
    const content = main
      .prepend(header)
      .toString()
      .replaceAll(relPathRegex, relPathReplacer);

    feed.addItem({
      title: fm.title,
      id: link,
      link,
      description: fm.description || 'New post from Runrig',
      content,
      author,
      contributor,
      date,
      image: fm.image || cardImage,
    });
  },
  buildEnd() {

    const feedDir = `${outDir}/${feedSubdir}`;
    if (!fs.existsSync(feedDir)) fs.mkdirSync(feedDir);

    // Output: RSS 2.0
    fs.writeFileSync(feedPathnames.rss, feed.rss2());

    // Output: Atom 1.0
    fs.writeFileSync(feedPathnames.atom, feed.atom1());

    // Output: JSON Feed 1.0
    fs.writeFileSync(feedPathnames.json, feed.json1());

  },
});
