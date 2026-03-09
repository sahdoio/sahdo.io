<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import {useArticles} from '@/composables/useArticles'
import {useYoutubeVideos, type ChannelKey} from '@/composables/useYoutubeVideos'
import {useI18n} from '@/composables/useI18n'

const { t } = useI18n()
const { data: articles } = await useArticles()
const allVideos = ref([])
const visibleCount = ref(6)
const activeChannel = ref<ChannelKey>('sahdoio')
const loadingVideos = ref(false)

const channelMeta: Record<ChannelKey, { descKey: string; accent: string; accentBorder: string; descBorder: string; descBg: string; buttonBg: string; tabActive: string; icon: string }> = {
  sahdoio: {
    descKey: 'channelSahdoio',
    accent: 'text-brand',
    accentBorder: 'border-brand/30',
    descBorder: 'border-brand/20',
    descBg: 'bg-brand/5',
    buttonBg: 'bg-brand/10 hover:bg-brand/20 text-brand',
    tabActive: 'bg-brand text-surface-primary shadow-lg shadow-brand/20',
    icon: '🇺🇸',
  },
  devafora: {
    descKey: 'channelDevafora',
    accent: 'text-sky-400',
    accentBorder: 'border-sky-400/30',
    descBorder: 'border-sky-400/20',
    descBg: 'bg-sky-400/5',
    buttonBg: 'bg-sky-400/10 hover:bg-sky-400/20 text-sky-400',
    tabActive: 'bg-sky-400 text-surface-primary shadow-lg shadow-sky-400/20',
    icon: '🇧🇷',
  },
}

const currentMeta = computed(() => channelMeta[activeChannel.value])

const videos = computed(() => allVideos.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < allVideos.value.length)

async function switchChannel(channel: ChannelKey) {
  activeChannel.value = channel
  loadingVideos.value = true
  visibleCount.value = 6
  allVideos.value = await useYoutubeVideos(channel)
  loadingVideos.value = false
}

function loadMore() {
  visibleCount.value += 6
}

onMounted(() => switchChannel(activeChannel.value))
</script>

<template>
  <div class="min-h-screen bg-surface-primary text-text-primary font-sans flex flex-col items-center px-6 py-10">
    <!-- Avatar + Header -->
    <img
      src="/avatar.png"
      alt="Avatar"
      class="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 border-2 border-brand/40 shadow-lg"
    />

    <h1 class="text-center text-2xl md:text-4xl font-bold leading-tight text-text-primary">
      {{ t('title') }}
    </h1>
    <p class="text-center text-sm md:text-base text-text-muted mt-1">{{ t('subtitle') }}</p>

    <p class="text-center max-w-2xl mt-4 text-text-secondary leading-relaxed text-[15px]">
      <template v-for="(part, i) in t('bio').split(/(\{[^}]+\})/)" :key="i">
        <span v-if="part === '{php}'" class="font-medium text-text-primary">PHP</span>
        <span v-else-if="part === '{laravel}'" class="font-medium text-text-primary">Laravel</span>
        <span v-else-if="part === '{symfony}'" class="font-medium text-text-primary">Symfony</span>
        <span v-else-if="part === '{node}'" class="font-medium text-text-primary">Node.js</span>
        <span v-else-if="part === '{vue}'" class="font-medium text-text-primary">Vue.js</span>
        <span v-else-if="part === '{react}'" class="font-medium text-text-primary">React</span>
        <span v-else-if="part === '{docker}'" class="font-medium text-text-primary">Docker</span>
        <span v-else-if="part === '{aws}'" class="font-medium text-text-primary">AWS</span>
        <a v-else-if="part === '{hintify}'" href="https://hintify.io" class="text-brand hover:underline font-medium">Hintify</a>
        <a v-else-if="part === '{sahdo}'" href="https://www.youtube.com/@sahdoio" class="text-brand hover:underline font-medium">Sahdo.io</a>
        <template v-else>{{ part }}</template>
      </template>
    </p>

    <p class="text-center max-w-xl mt-3 text-text-muted text-[13px] italic">
      {{ t('learning') }}
    </p>

    <div class="mt-4 text-green-400 bg-green-900/20 rounded-full px-4 py-1 text-sm">
      {{ t('available') }}
    </div>

    <div class="flex flex-wrap justify-center gap-4 mt-6 text-text-secondary text-[15px]">
      <a href="https://github.com/sahdoio" target="_blank" class="hover:text-white transition-colors duration-150">GitHub</a>
      <a href="https://x.com/lucassahdo" target="_blank" class="hover:text-white transition-colors duration-150">X</a>
      <a href="https://www.linkedin.com/in/lucassahdo/" target="_blank" class="hover:text-white transition-colors duration-150">LinkedIn</a>
      <a href="https://www.instagram.com/sahdoio" target="_blank" class="hover:text-white transition-colors duration-150">Instagram</a>
      <a href="https://www.tiktok.com/@lucassahdo" target="_blank" class="hover:text-white transition-colors duration-150">TikTok</a>
      <a href="https://www.youtube.com/@sahdoio" target="_blank" class="hover:text-white transition-colors duration-150">YouTube</a>
    </div>

    <div class="w-full max-w-content mt-12">
      <!-- Articles -->
      <h2 class="text-lg font-bold text-text-primary mb-5">{{ t('articles') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <a
          v-for="(article, index) in articles"
          :key="index"
          :href="article.url"
          target="_blank"
          class="bg-surface-secondary border border-border-subtle rounded-[10px] overflow-hidden flex flex-col hover:bg-surface-tertiary hover:border-brand/40 transition-all duration-150"
        >
          <img
            v-if="article.cover"
            :src="article.cover"
            :alt="article.title"
            class="w-full h-[180px] object-cover"
          />
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-text-primary font-bold text-[16px] leading-snug mb-2 line-clamp-2">{{ article.title }}</h3>
            <p class="text-text-secondary text-[14px] leading-relaxed mb-3 line-clamp-3">{{ article.brief }}</p>
            <span class="mt-auto text-[13px] text-text-muted">{{ article.date }}</span>
          </div>
        </a>
      </div>

      <NuxtLink to="/articles" class="mt-4 text-sm text-text-muted hover:text-brand transition-colors duration-150 block">
        {{ t('seeMore') }} &rarr;
      </NuxtLink>

      <!-- Youtube -->
      <div class="w-full mt-16">
        <h2 class="text-lg font-bold text-text-primary mb-5">{{ t('latestVideos') }}</h2>

        <div class="flex flex-col items-center mb-8">
          <div class="inline-flex bg-surface-secondary rounded-[10px] p-1 gap-1 mb-4 border border-border-subtle">
            <button
              @click.prevent="switchChannel('sahdoio')"
              :class="[
                'px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-150',
                activeChannel === 'sahdoio'
                  ? channelMeta.sahdoio.tabActive
                  : 'text-text-secondary hover:text-white'
              ]"
            >
              sahdoio
            </button>
            <button
              @click.prevent="switchChannel('devafora')"
              :class="[
                'px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-150',
                activeChannel === 'devafora'
                  ? channelMeta.devafora.tabActive
                  : 'text-text-secondary hover:text-white'
              ]"
            >
              devafora
            </button>
          </div>
          <div :class="['max-w-lg px-5 py-3 rounded-[10px] border text-center transition-all duration-150', currentMeta.descBg, currentMeta.descBorder]">
            <span class="mr-2">{{ currentMeta.icon }}</span>
            <span :class="['text-[14px]', currentMeta.accent]">{{ t(currentMeta.descKey) }}</span>
          </div>
        </div>

        <div class="min-h-[400px]">
        <div v-if="loadingVideos" class="text-text-muted text-sm">{{ t('loadingVideos') }}</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(video, index) in videos"
            :key="index"
            :class="['bg-surface-secondary border rounded-[10px] overflow-hidden flex flex-col hover:bg-surface-tertiary transition-all duration-150', currentMeta.accentBorder]"
          >
          <img :src="video.thumbnail" :alt="video.title" class="w-full h-[180px] object-cover"/>
            <div class="p-4 flex flex-col justify-between flex-1">
              <h3 class="text-text-primary font-bold text-[16px] leading-snug mb-2 line-clamp-2">{{ video.title }}</h3>
              <div class="text-[13px] text-text-muted mb-4">{{ video.pubDate }}</div>
              <a
                :href="video.url"
                target="_blank"
                :class="['mt-auto px-4 py-2 rounded-lg text-center text-sm font-medium transition-all duration-150', currentMeta.buttonBg]"
              >
                {{ t('watch') }}
              </a>
            </div>
          </div>
        </div>
        <div v-if="hasMore && !loadingVideos" class="flex justify-center mt-6">
          <button
            @click="loadMore"
            :class="['px-6 py-2 text-sm font-medium rounded-lg transition-all duration-150', currentMeta.buttonBg]"
          >
            {{ t('loadMore') }}
          </button>
        </div>
        </div>
      </div>

    </div>
  </div>
</template>
