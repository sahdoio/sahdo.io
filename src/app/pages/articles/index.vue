<script setup lang="ts">
import { useArticles } from '@/composables/useArticles'

const articles = useArticles()
</script>

<template>
  <div class="min-h-screen bg-black text-white px-6 py-12 max-w-4xl mx-auto font-sans">
    <!-- Back -->
    <NuxtLink to="/" class="text-sm text-gray-500 hover:text-white transition-colors duration-150">
      ← Back to home
    </NuxtLink>

    <!-- Title -->
    <h1 class="text-4xl font-bold mt-6 mb-8 text-white">
      📚 Articles
    </h1>

    <!-- List -->
    <div class="divide-y divide-gray-800 border border-gray-800 rounded-md overflow-hidden">
      <NuxtLink
        v-for="(article, index) in articles"
        :key="index"
        :to="`/articles/${article.slug}`"
        class="flex justify-between items-center px-6 py-4 hover:bg-white/5 transition duration-200"
      >
        <div class="text-lg font-medium text-white">
          {{ article.title }}
        </div>
        <div class="text-sm text-gray-400 whitespace-nowrap">{{ article.date }}</div>
      </NuxtLink>
    </div>

    <!-- Footer -->
    <div class="mt-6 text-center text-gray-500 text-sm">
      More articles coming soon...
    </div>
  </div>
</template>
