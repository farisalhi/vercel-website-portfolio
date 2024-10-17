import { getProjects } from 'app/blog/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let projects = getProjects().map((projects) => ({
    url: `${baseUrl}/blog/${projects.slug}`,
    lastModified: projects.metadata.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projects]
}
