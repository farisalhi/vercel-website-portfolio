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
    <section>
      <Link
        href="/projects"
        className="transition-all text-neutral-800 dark:text-neutral-200 hover:font-bold mb-4 inline-block">
        <span className="inline-block transition-transform transform duration-200 hover:-translate-x-1 mr-1">
          &larr;
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
      <h1 className="title font-semibold text-4xl tracking-normal">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
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
