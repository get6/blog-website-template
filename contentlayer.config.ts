import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeHighlight from 'rehype-highlight'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace(/^posts\//, ''),
    },
  },
}))

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/${article._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (article) =>
        article._raw.flattenedPath.replace(/^articles\//, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'blog',
  documentTypes: [Post, Article],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrettyCode, rehypeHighlight as any],
  },
})
