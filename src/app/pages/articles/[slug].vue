<script setup lang="ts">
import { useArticles } from '@/composables/useArticles'
import { useI18n } from '@/composables/useI18n'
import { useRoute } from 'vue-router'
import { computed, onMounted, nextTick } from 'vue'
import Prism from '~/plugins/prism'

const { t } = useI18n()
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
  <div class="min-h-screen bg-surface-primary text-text-primary font-sans px-6 py-10 max-w-content mx-auto">
    <div v-if="article">
      <!-- back link -->
      <NuxtLink to="/" class="text-sm text-text-muted hover:text-brand transition-colors duration-150">
        &larr; {{ t('backToHome') }}
      </NuxtLink>

      <!-- cover image -->
      <img
        v-if="article.cover"
        :src="article.cover"
        alt="cover"
        class="w-full h-64 object-cover rounded-[10px] shadow-md my-6"
      />

      <!-- title and date -->
      <h1 class="text-4xl font-bold mb-2 text-text-primary">{{ article.title }}</h1>
      <p class="text-[13px] text-text-muted mb-8">{{ article.date }}</p>

      <!-- content -->
      <div
        class="prose prose-invert max-w-none
               prose-code:before:hidden prose-code:after:hidden
               prose-code:bg-surface-secondary prose-code:text-green-400 prose-code:text-sm
               prose-code:rounded prose-code:px-2 prose-code:py-1
               prose-pre:bg-surface-secondary prose-pre:rounded-[10px] prose-pre:px-6 prose-pre:py-4
               overflow-x-auto"
        v-html="article.content"
      />
    </div>

    <div v-else>
      <h2 class="text-red-400 text-xl font-bold">{{ t('articleNotFound') }}</h2>
      <NuxtLink to="/" class="text-sm text-text-muted hover:text-brand transition-colors duration-150">
        {{ t('goBack') }}
      </NuxtLink>
    </div>
  </div>
</template>
