import { defineEventHandler, getQuery } from 'h3'

const CHANNELS: Record<string, string> = {
  sahdoio: 'UCDFwxRy7d_8wI__kjLiFrJg',
  devafora: 'UCOqSuTadeEwf4aamjeYOrMQ',
}

export default defineEventHandler(async (event) => {
  const { channel = 'sahdoio' } = getQuery(event)
  const channelId = CHANNELS[channel as string]

  if (!channelId) return []

  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    const xml = await $fetch<string>(feedUrl, { responseType: 'text' })

    const entries = xml.split('<entry>').slice(1)

    return entries.map((entry) => {
      const get = (tag: string) => {
        const match = entry.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`))
        return match ? match[1].trim() : ''
      }
      const getAttr = (tag: string, attr: string) => {
        const match = entry.match(new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, 's'))
        return match ? match[1] : ''
      }

      const videoId = get('yt:videoId')
      const title = get('title')
      const published = get('published')

      return {
        title,
        videoId,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        pubDate: new Date(published).toLocaleDateString(),
      }
    })
  } catch (err) {
    console.error('Error fetching YouTube feed:', err)
    return []
  }
})
