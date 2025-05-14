import { createContentLoader } from 'vitepress'

const hasValidDate = post => !!new Date(post.frontmatter.date).valueOf();

const sortPostsDescByDate = (a, b) =>
  +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);

const transformUrl = post => ({
  ...post,
  url: post.url.replace('posts/', ''),
});

const transform = raw =>
  raw.filter(hasValidDate).map(transformUrl).toSorted(sortPostsDescByDate);

export default createContentLoader('posts/journal/**/*.md', { transform });
