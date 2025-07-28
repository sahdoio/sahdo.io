<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {useArticles} from '@/composables/useArticles'
import {useYoutubeVideos} from '@/composables/useYoutubeVideos'

const articles = ref(useArticles())
const videos = ref([])

onMounted(async () => {
  videos.value = await useYoutubeVideos()
})
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans flex flex-col items-center px-6 sm:px-10 py-10">
    <!-- Avatar + Header -->
    <img
      src="/avatar.png"
      alt="Avatar"
      class="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 border-4 border-white shadow-lg"
    />

    <h1 class="text-center text-2xl md:text-4xl font-bold leading-tight">
      Software Engineer and Architect
    </h1>

    <p class="text-center max-w-2xl mt-4 text-gray-300 leading-relaxed">
      With over a decade of experience in backend development and system architecture, I help companies design scalable solutions using <span class="font-medium text-white">PHP</span>, <span class="font-medium text-white">Node.js</span>, and modern <span class="font-medium text-white">JavaScript</span> frameworks like <span class="font-medium text-white">Vue</span> and <span class="font-medium text-white">Nuxt</span>.
      I’m also the founder of
      <a href="https://hintify.io" class="underline hover:text-white font-medium">Hintify</a>
      and a passionate tech educator at
      <a href="https://www.youtube.com/@sahdoio" class="underline hover:text-white font-medium">Sahdo.io</a>.
    </p>

    <div class="mt-3 text-green-400 bg-green-900/20 rounded-full px-4 py-1 text-sm">
      • Available for freelance, consulting & collaboration
    </div>

    <div class="flex gap-4 mt-6 text-gray-400">
      <a href="https://github.com/sahdoio" target="_blank">GitHub</a>
      <a href="https://x.com/lucassahdo" target="_blank">X</a>
      <a href="https://www.linkedin.com/in/lucassahdo/" target="_blank">LinkedIn</a>
      <a href="https://www.instagram.com/sahdoio" target="_blank">Instagram</a>
      <a href="https://www.tiktok.com/@lucassahdo" target="_blank">TikTok</a>
      <a href="https://www.youtube.com/@sahdoio" target="_blank">YouTube</a>
    </div>

    <div class="w-full max-w-6xl mt-12">
      <!-- Articles -->
      <h2 class="text-lg italic text-gray-300 mb-4">Articles</h2>
      <ul>
        <li
          v-for="(article, index) in articles"
          :key="index"
          class="flex justify-between py-2 border-b border-gray-800"
        >
          <NuxtLink
            :to="`/articles/${article.slug}`"
            class="hover:underline text-white"
          >
            {{ article.title }}
          </NuxtLink>
          <span class="text-gray-500">{{ article.date }}</span>
        </li>
      </ul>

      <NuxtLink to="/articles" class="mt-2 text-sm italic text-gray-400 hover:underline block">
        See more
      </NuxtLink>

      <!-- Youtube -->
      <div class="w-full mt-20">
        <h2 class="text-lg italic text-gray-300 mb-4">Latest Videos</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(video, index) in videos"
            :key="index"
            class="bg-gray-900 border border-gray-700 rounded-lg shadow-[0_0_0_1px_#1f2937] overflow-hidden flex flex-col"
          >
          <img :src="video.thumbnail" :alt="video.title" class="w-full h-48 object-cover"/>
            <div class="p-4 flex flex-col justify-between flex-1">
              <h3 class="text-white font-semibold text-lg mb-2">{{ video.title }}</h3>
              <div class="text-sm text-gray-400 mb-4">{{ video.pubDate }}</div>
              <a
                :href="video.url"
                target="_blank"
                class="mt-auto bg-gray-700 text-white px-4 py-2 rounded text-center"
              >
                Watch
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

