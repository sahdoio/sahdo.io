import { defineEventHandler, getQuery } from 'h3'

const CHANNELS: Record<string, string> = {
  sahdoio: 'UCDFwxRy7d_8wI__kjLiFrJg',
  devafora: 'UCOqSuTadeEwf4aamjeYOrMQ',
}

interface YouTubePlaylistItem {
  snippet: {
    title: string
    publishedAt: string
    resourceId: { videoId: string }
  }
}

interface YouTubePlaylistResponse {
  items: YouTubePlaylistItem[]
}

export default defineEventHandler(async (event) => {
  const { channel = 'sahdoio' } = getQuery(event)
  const channelId = CHANNELS[channel as string]

  if (!channelId) return []

  const { youtubeApiKey } = useRuntimeConfig(event)
  if (!youtubeApiKey) {
    console.warn('YOUTUBE_API_KEY is not configured')
    return []
  }

  // The uploads playlist ID is the channel ID with "UC" replaced by "UU"
  const uploadsPlaylistId = channelId.replace(/^UC/, 'UU')

  try {
    const data = await $fetch<YouTubePlaylistResponse>(
      'https://www.googleapis.com/youtube/v3/playlistItems',
      {
        query: {
          part: 'snippet',
          playlistId: uploadsPlaylistId,
          maxResults: 20,
          key: youtubeApiKey,
        },
      },
    )

    return (data.items || []).map((item) => {
      const { title, publishedAt, resourceId } = item.snippet
      const videoId = resourceId.videoId

      return {
        title,
        videoId,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        pubDate: new Date(publishedAt).toLocaleDateString(),
      }
    })
  } catch (err) {
    console.error('Error fetching YouTube videos:', err)
    return []
  }
})
