import fs from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
import { Feed } from 'feed';
import * as cheerio from 'cheerio';

const title = 'Runrig';
const defaultObjectType = 'website';
const domain = 'https://www.runrig.org';
const logo = '/emoji_u1f69c.svg';
const logoUrl = domain + logo;
const cardImage = `${domain}/open_field_system_all_725x900.png`;
const description = `
  Runrig is a communal farming platform, a libre software project and
  a method of socio-ecological design. It aims for collective sovereignty over
  not just our food, but also the labor that raises it, the land and living
  things that support it, and the data connecting connecting it all.
`.replaceAll(/\s+/g, ' ').trim();

const team = {
  name: 'The Runrig Team',
  email: 'jamie@runrig.org',
  link: `${domain}/about`,
};
const jamie = {
  name: 'Jamie Gaehring',
  email: 'jamie@runrig.org',
  link: 'https://jgaehring.com/',
};

const outDir =  './dist';

const feedSubdir = 'feed';
// Each format name (per FeedOptions.feedLinks), file name, file extension.
const feedFmtFileExts = [
  ['atom', 'atom', 'xml'],
  ['json', 'feed', 'json'],
  ['rss', 'rss', 'xml'],
];

// Just like Object.fromEntries(), but as a callback Array.reduce() will accept.
const fromEntries = (obj, [k, v]) => ({ ...obj, [k]: v });

// Filter out the RSS feed and transform the feeds into consistent URLs.
const toFeedUrl = (file, ext) => `${domain}/${feedSubdir}/${file}.${ext}`;
/** @type {{ atom: string, json: string }} */
const feedLinks = feedFmtFileExts
  .filter(([format]) => format !== 'rss')
  .map(([fmt, file, ext]) => [fmt, toFeedUrl(file, ext)])
  .reduce(fromEntries, {});

// Transform the feeds into consistent file paths that correspond to the URLs.
const toFeedPathname = (file, ext) => `${outDir}/${feedSubdir}/${file}.${ext}`;
/** @type {{ atom: string, json: string, rss: string }} */
const feedPathnames = feedFmtFileExts
  .map(([fmt, file, ext]) => [fmt, toFeedPathname(file, ext)])
  .reduce(fromEntries, {});

const feed = new Feed({
  title: 'The Runrig Plan',
  description: 'All bi-weekly publications from Runrig, including The Runrig Plan, The Runrig Journal, and Technical Reports',
  id: domain,
  link: domain,
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
    /**
     * HTML LINKS & STANDARD META TAGS
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name#value
     * 
     * Because there should only be one canonical link, defer that to the
     * `transformHead()` build hook below.
     */
    ['link', { rel: 'icon', href: logo }],
    /**
     * Alternate links for discovery of RSS, Atom & JSON feeds
     * @see https://kevincox.ca/2022/05/06/rss-feed-best-practices/#discovery
     */
    ...feedFmtFileExts.map(([fmt, file, ext]) => [
      'link',
      {
        rel: 'alternate',
        title: `${feed.options.title} (${fmt.toUpperCase()})`,
        type: `application/${file}+${ext}`,
        href: toFeedUrl(file, ext),
      },
    ]),

    /**
     * OPEN GRAPH META TAGS
     * @see https://ogp.me/
     */
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:type', content: defaultObjectType }],
    ['meta', { property: 'og:url', content: domain }],
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
        text: 'Projects',
        items: [
          { text: 'The Runrig Plan', link: '/plan' },
          { text: 'Farm Flow', link: '/farm-flow' },
        ],
      },
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

  /**
   * VitePress: "[A] build hook to transform the head before generating each
   * page. It will allow you to add head entries that cannot be statically
   * added to your VitePress config. You only need to return extra entries,
   * they will be merged automatically with the existing ones."
   * @see https://vitepress.dev/reference/site-config#transformhead
   * 
   * Tasks performed by this build hook are primarily for Journal entries:
   *    1. Push the post's content and metadata onto the RSS Feed instance,
   *      which will be written to disk later by the `buildEnd()` hook.
   *    2. Append post-specific meta tags to the page <head> by returning a list
   *      of HeadConfig tuples, which will be merged automatically by VitePress.
   */
  async transformHead(ctx) {
    const { frontmatter: fm, relativePath } = ctx.pageData;

    // Replace all Markdown file extensions & format the <link> tag used by RSS.
    const mdExtRegex = /\.(md|txt|markdown)$/g;
    const link = `${domain}/${relativePath}`.replace(mdExtRegex, '.html');

    // Trim any trailing slashes and/or .html extensions for the canonical link.
    const htmlExtRegex = /(?:\/?(?:index)?(?:.html)?)$/g
    const canonical = link.replace(htmlExtRegex, '');


    // All transformations after this point depend on valid frontmatter data, so
    // if there is no frontmatter, return early with just the canonical link,
    // which will be appended to the <head> element w/o altering any other tags.
    // This will also exclude all non-posts from the RSS feed, which is the
    // desired behavior for the home page & other non-posts (e.g., /about).
    const isValidFeedItem = !!fm && typeof fm === 'object'
      && !!fm.title
      && !!fm.date;
    if (!isValidFeedItem) {
      return [
        ['link', { rel: 'canonical', href: canonical }],
      ];
    };

    // Open Graph properties that will be used for both meta tags and RSS feed.
    const ogTitle = fm.title || title;
    const ogDescription = fm.description
      || fm.subtitle
      || 'New post from Runrig';
    const ogImage = fm.image || cardImage;

    const author = [];
    if (!!fm.author && typeof fm.author === 'object') author.concat(fm.author)
    if (author.length === 0) author.push(jamie);

    const contributor = [];
    if (!!fm.contributor && typeof fm.contributor === 'object') {
      contributor.concat(fm.contributor);
    }

    // The RSS Feed instance takes a JS Date object, not a string.
    const date = fm.date ? new Date(fm.date) : new Date();

    // A quick'n'dirty means of replacing all relative links in HTML attributes,
    // primarily on <a> and <img> elements in the body. Only for RSS.
    const relPathRegex = /(href|src)="([\/#])([\w-_%#~:\/\.]*)"/g
    const relPathReplacer = (match, attr, hashOrSlash, tagOrFrag) => {
      if (attr === 'href' && hashOrSlash === '#') {
        return `href="${link}#${tagOrFrag}"`;
      }
      return `${attr}="${domain}${hashOrSlash}${tagOrFrag}"`;
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

    /** @type {import('feed').Item} */
    const feedItem = {
      title: ogTitle,
      id: link,
      link,
      description: ogDescription,
      content,
      author,
      contributor,
      date,
      image: ogImage,
    };
    // Just push the current page onto the RSS Feed instance for now. It will be
    // written to file separately in the `buildEnd()` VitePress hook below.
    feed.addItem(feedItem);

    /**
     * VitePress: "extra entries [...] will be merged automatically with the
     * existing ones" – i.e., no need to overwrite tags like 'og:type' that
     * have already been set above as part of the static config.
     */
    return [
      // HTML LINKS & STANDARD META TAGS
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { name: 'description', content: ogDescription }],
      ...author.map(a =>
        ['meta', { name: 'author', content: a.name }]
      ),

      // OPEN GRAPH META TAGS
      ['meta', { property: 'og:title', content: ogTitle }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:image', content: ogImage }],
      ['meta', { property: 'og:description', content: ogDescription }],

      // TWITTER CARD META TAGS
      ['meta', { property: 'twitter:title', content: ogTitle }],
      ['meta', { property: 'twitter:image', content: ogImage }],
      ['meta', { property: 'twitter:description', content: ogDescription }],
    ];
  },
  /**
   * VitePress: "[A] build CLI hook, it will run after build (SSG) finish but
   * before VitePress CLI process exits."
   * @see https://vitepress.dev/reference/site-config#buildend
   * 
   * Tasks performed by this build hook:
   *    1. Write RSS Feed to disk, along w/ Atom & JSON Feed.
   */
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
