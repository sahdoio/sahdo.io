export type ChannelKey = 'sahdoio' | 'devafora'

export async function useYoutubeVideos(channel: ChannelKey = 'sahdoio') {
  try {
    const res = await fetch(`/api/videos?channel=${channel}`)
    return await res.json()
  } catch (err) {
    console.error('failed to fetch videos:', err)
    return []
  }
}
