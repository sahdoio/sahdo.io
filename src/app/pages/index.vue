<script setup lang="ts">
import { ref } from 'vue'
import { useArticles } from '@/composables/useArticles'

const articles = ref(useArticles())

</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans flex flex-col items-center px-4 py-10">
    <!-- Avatar + Header -->
    <img
      src="/avatar.png"
      alt="Avatar"
      class="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 border-4 border-white shadow-lg"
    />

    <h1 class="text-center text-2xl md:text-4xl font-bold leading-tight">
      The efficiency of one, the talent of three.<br />
      <span class="text-gray-400">Why look elsewhere?</span>
    </h1>

    <!-- Description -->
    <p class="text-center max-w-xl mt-4 text-gray-300">
      Developer, art director and photographer, I fuse technicality and aestheticism
      to bring a unique dimension to my work. Passionate about beauty, I give life
      to projects that captivate and convert.
    </p>

    <!-- Availability -->
    <div class="mt-3 text-green-400 bg-green-900/20 rounded-full px-4 py-1 text-sm">
      • Available for new opportunities
    </div>

    <!-- Social Icons Placeholder -->
    <div class="flex gap-4 mt-6 text-gray-400">
      <a href="#">GitHub</a>
      <a href="#">X</a>
      <a href="#">LinkedIn</a>
      <a href="#">Instagram</a>
      <a href="#">Spotify</a>
    </div>

    <!-- CTA Buttons -->
    <div class="flex gap-4 mt-6">
      <button class="bg-white text-black px-4 py-2 rounded">Let's work together</button>
      <button class="bg-white text-black px-4 py-2 rounded">Schedule a meeting</button>
    </div>

    <!-- Deploy Button -->
    <button class="mt-6 bg-gray-700 px-3 py-1 rounded text-sm">Deploy</button>

    <!-- Articles List -->
    <div class="w-full max-w-2xl mt-12">
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
    </div>
  </div>
</template>
