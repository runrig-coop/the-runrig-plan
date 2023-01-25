import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';

export default defineConfig({
  themeConfig: {
    siteTitle: 'Runrig',
  },
  srcDir: './',
  cacheDir: './.cache',
  outDir: './dist',
  markdown: {
    config(md) {
      md.use(footnote_plugin);
    }
  },
});
