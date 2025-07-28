<script setup lang="ts">
import { useArticles } from '@/composables/useArticles'
import { useRoute } from 'vue-router'
import { computed, onMounted, nextTick } from 'vue'
import Prism from '~/plugins/prism'

const route = useRoute()
const articles = useArticles()

const article = computed(() =>
  articles.find((a) => a.slug === route.params.slug)
)

onMounted(async () => {
  await nextTick()
  Prism.highlightAll()
})
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans px-6 py-10 max-w-6xl mx-auto">
    <div v-if="article">
      <!-- back link -->
      <NuxtLink to="/" class="text-sm text-gray-400 hover:underline">
        ← Back to home
      </NuxtLink>

      <!-- cover image -->
      <img
        v-if="article.cover"
        :src="article.cover"
        alt="cover"
        class="w-full h-64 object-cover rounded-lg shadow-md my-6"
      />

      <!-- title and date -->
      <h1 class="text-4xl font-bold mb-2">{{ article.title }}</h1>
      <p class="text-sm text-gray-500 mb-8">{{ article.date }}</p>

      <!-- content -->
      <div
        class="prose prose-invert max-w-none
               prose-code:before:hidden prose-code:after:hidden
               prose-code:bg-gray-900 prose-code:text-green-400 prose-code:text-sm
               prose-code:rounded prose-code:px-2 prose-code:py-1
               prose-pre:bg-gray-900 prose-pre:rounded-lg prose-pre:px-6 prose-pre:py-4
               overflow-x-auto"
        v-html="article.content"
      />
    </div>

    <div v-else>
      <h2 class="text-red-400 text-xl font-bold">Article not found</h2>
      <NuxtLink to="/" class="text-sm text-gray-400 hover:underline">
        Go back
      </NuxtLink>
    </div>
  </div>
</template>
