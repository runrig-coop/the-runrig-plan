import footnote_plugin from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: './',
  markdown: {
    config(md) {
      md.use(footnote_plugin);
    }
  },
});
