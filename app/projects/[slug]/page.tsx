import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getProjects } from 'app/projects/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import type { Metadata } from 'next'

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  let posts = getProjects()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata | undefined {
  let post = getProjects().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Project({ params }: ProjectPageProps) {
  let post = getProjects().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="max-w-3xl">
      <Link
        href="/projects"
        className="motion-link mb-8 inline-flex items-center font-mono text-sm text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
        <span className="mr-2 inline-block">
          {'<-'}
        </span>
        back to projects
      </Link>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Project',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/projects/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Faris Salhi',
            },
            inLanguage: post.metadata.languages,
          }),
        }}
      />
      <h1 className="text-4xl font-semibold tracking-normal text-neutral-950 dark:text-neutral-50 sm:text-5xl">
        {post.metadata.title}
      </h1>
      <div className="mt-4 mb-10 flex flex-wrap items-center gap-3 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
        {post.metadata.languages && (
          <span className="rounded-md border border-neutral-200 px-2.5 py-1 font-mono text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
            {post.metadata.languages}
          </span>
        )}
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
      {/* <Link
      className='transition-all underline dark:text-neutral-200 dark:hover:font-bold dark:hover:text-neutral-100'
      href="/novel-peek.pdf"
      rel="noopener noreferrer"
      target="_blank"
      >
      Excerpt from my novel "Dunya"
      </Link> */}
    </section>
  )
}
