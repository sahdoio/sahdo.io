export async function useYoutubeVideos() {
  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=UCDFwxRy7d_8wI__kjLiFrJg`
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`)
    const json = await res.json()

    if (!json.items) return []

    return json.items.map((item: any) => ({
      title: item.title,
      videoId: item.link.split('=')[1],
      thumbnail: item.thumbnail,
      url: item.link,
      pubDate: new Date(item.pubDate).toLocaleDateString()
    }))
  } catch (err) {
    console.error('❌ failed to fetch videos:', err)
    return []
  }
}
