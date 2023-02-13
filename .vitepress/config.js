import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: './',
  cacheDir: './.cache',
  outDir: './dist',
  title: 'Runrig',
  themeConfig: {
    siteTitle: 'Runrig',
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
