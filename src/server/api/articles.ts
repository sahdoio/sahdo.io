import { defineEventHandler } from 'h3'

interface Article {
  title: string
  url: string
  date: string
  cover: string | null
  brief: string
}

export default defineEventHandler(async (event): Promise<Article[]> => {
  const config = useRuntimeConfig()
  const host = config.public.hashnodeHost

  const query = `
    {
      publication(host: "${host}") {
        posts(first: 10) {
          edges {
            node {
              title
              brief
              url
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await $fetch<any>('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { query }
    })

    const posts = response.data?.publication?.posts?.edges || []
    
    return posts.map((edge: any) => {
      const node = edge.node
      return {
        title: node.title,
        url: node.url,
        date: new Date(node.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        cover: node.coverImage?.url || null,
        brief: node.brief
      }
    })
  } catch (error) {
    console.error('Error fetching Hashnode articles:', error)
    return []
  }
})
