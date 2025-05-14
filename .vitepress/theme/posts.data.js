import { createContentLoader } from 'vitepress'

const hasValidDate = post => !!new Date(post.frontmatter.date).valueOf();

const sortPostsDescByDate = (a, b) =>
  +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);

const transform = raw =>
  raw.filter(hasValidDate).toSorted(sortPostsDescByDate);

export default createContentLoader('posts/**/*.md', { transform });
