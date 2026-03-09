<script setup lang="ts">
import { useArticles } from '@/composables/useArticles'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const { data: articles } = await useArticles()
</script>

<template>
  <div class="min-h-screen bg-surface-primary text-text-primary px-6 py-12 max-w-content mx-auto font-sans">
    <!-- Back -->
    <NuxtLink to="/" class="text-sm text-text-muted hover:text-brand transition-colors duration-150">
      &larr; {{ t('backToHome') }}
    </NuxtLink>

    <!-- Title -->
    <h1 class="text-4xl font-bold mt-6 mb-8 text-text-primary">
      {{ t('articles') }}
    </h1>

    <!-- List -->
    <div class="divide-y divide-border-subtle border border-border-subtle rounded-[10px] overflow-hidden">
      <a
        v-for="(article, index) in articles"
        :key="index"
        :href="article.url"
        class="flex justify-between items-center px-6 py-4 hover:bg-surface-tertiary transition-all duration-150"
      >
        <div class="text-[16px] font-bold text-text-primary">
          {{ article.title }}
        </div>
        <div class="text-[13px] text-text-muted whitespace-nowrap ml-4">{{ article.date }}</div>
      </a>
    </div>

    <!-- Footer -->
    <div class="mt-6 text-center text-text-muted text-sm">
      {{ t('moreArticles') }}
    </div>
  </div>
</template>
