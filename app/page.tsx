import Title from '@/app/ui/Title'
import { Post, allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="truncate text-sm">{post.body.raw}</div>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto max-w-xl py-8">
        <Title />
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        <Link
          href="/articles"
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          View all articles
        </Link>
      </div>
    </main>
  )
}
