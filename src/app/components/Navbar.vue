<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n, type Locale } from '@/composables/useI18n'

const { locale, setLocale } = useI18n()
const open = ref(false)

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
]

const currentFlag = computed(() => languages.find(l => l.code === locale.value)?.flag)

function selectLocale(code: Locale) {
  setLocale(code)
  open.value = false
}

function closeDropdowns(e: Event) {
  const target = e.target as HTMLElement
  if (!target.closest('.relative')) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', closeDropdowns))
onUnmounted(() => document.removeEventListener('click', closeDropdowns))
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-surface-primary/90 backdrop-blur-md">
    <div class="max-w-content mx-auto px-6 h-20 flex items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">
        <img src="/logo.webp" alt="sahdoio" class="h-14" />
      </NuxtLink>

      <!-- Center nav links -->
      <div class="hidden sm:flex items-center gap-5 mx-auto">
        <a
          href="https://www.youtube.com/@sahdoio"
          target="_blank"
          class="text-[15px] text-white hover:text-brand transition-colors duration-150"
        >
          youtube (sahdoio)
        </a>
        <a
          href="https://www.youtube.com/@devafora"
          target="_blank"
          class="text-[15px] text-white hover:text-brand transition-colors duration-150"
        >
          youtube (devafora)
        </a>

        <a
          href="https://pinkary.com/@sahdoio"
          target="_blank"
          class="text-[15px] text-white hover:text-brand transition-colors duration-150"
        >
          social links
        </a>
      </div>

      <!-- Language picker -->
      <div class="relative ml-auto sm:ml-0">
        <button
          @click="open = !open"
          class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-secondary border border-border-subtle text-sm text-text-secondary hover:border-brand/40 transition-colors duration-150"
        >
          <span>{{ currentFlag }}</span>
          <span>{{ locale.toUpperCase() }}</span>
          <svg class="w-3.5 h-3.5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          v-if="open"
          class="absolute right-0 mt-2 w-40 bg-surface-secondary border border-border-subtle rounded-[10px] shadow-xl overflow-hidden"
        >
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLocale(lang.code)"
            :class="[
              'w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 transition-colors duration-150',
              locale === lang.code
                ? 'bg-surface-tertiary text-text-primary'
                : 'text-text-secondary hover:bg-surface-tertiary hover:text-text-primary'
            ]"
          >
            <span>{{ lang.flag }}</span>
            <span>{{ lang.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
