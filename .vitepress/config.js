import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: './',
  cacheDir: './.cache',
  outDir: './dist',
  themeConfig: {
    siteTitle: 'Runrig',
    nav: [
      { text: 'Overview', link: '/overview' },
      { text: 'Ecology', link: '/ecology' },
    ],
  },
  markdown: {
    config(md) {
      md.use(footnote_plugin);
    }
  },
});
