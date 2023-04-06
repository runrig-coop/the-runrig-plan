import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: './',
  cacheDir: './.cache',
  outDir: './dist',
  title: 'Runrig',
  head: [
    [
      'link',
      { rel: 'icon', href: '/emoji_u1f69c.svg' }
    ]
  ],
  themeConfig: {
    siteTitle: 'Runrig',
    logo: '/emoji_u1f69c.svg',
    nav: [
      { text: 'Overview', link: '/overview' },
      { text: 'Ecology', link: '/ecology' },
      { text: 'Architecture', link: '/architecture' },
    ],
  },
  markdown: {
    config(md) {
      md.use(footnote_plugin);
    }
  },
});
