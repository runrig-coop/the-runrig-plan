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
      { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚜</text></svg>' }
    ]
  ],
  themeConfig: {
    siteTitle: 'Runrig',
    logo: '/tractor.svg',
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
