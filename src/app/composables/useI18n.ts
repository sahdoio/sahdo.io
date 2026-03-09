import { ref, computed } from 'vue'

export type Locale = 'en' | 'pt'

const currentLocale = ref<Locale>('en')

const messages: Record<Locale, Record<string, string>> = {
  en: {
    title: 'Senior Software Engineer',
    subtitle: 'Backend Specialist & System Architect',
    bio: 'Senior Software Engineer with over a decade of experience since 2010. Specialist in REST API development and backend solutions with {php}, {laravel}, {symfony}, and {node}. Experienced in frontend with {vue} and {react}, DevOps with {docker} and {aws}, and passionate tech educator at {sahdo}. Also the founder of {hintify}.',
    learning: 'Diving deeper into Symfony, Slim, HyperF (Async PHP), Golang, Apache Kafka, and async PHP with Swoole.',
    available: 'Available for freelance, consulting & collaboration',
    articles: 'Articles',
    seeMore: 'See more',
    latestVideos: 'Latest Videos',
    watch: 'Watch',
    loadMore: 'Load more',
    loadingVideos: 'Loading videos...',
    backToHome: 'Back to home',
    articleNotFound: 'Article not found',
    goBack: 'Go back',
    moreArticles: 'More articles coming soon...',
    channelSahdoio: 'English channel focused on technical implementations, PHP, frameworks, POCs and benchmarks.',
    channelDevafora: 'Portuguese channel on architecture, system design, DDD, interviews and career.',
  },
  pt: {
    title: 'Engenheiro de Software Sênior',
    subtitle: 'Especialista Backend & Arquiteto de Sistemas',
    bio: 'Engenheiro de Software Sênior com mais de uma década de experiência desde 2010. Especialista em desenvolvimento de APIs REST e soluções backend com {php}, {laravel}, {symfony} e {node}. Experiência em frontend com {vue} e {react}, DevOps com {docker} e {aws}, e educador de tecnologia no {sahdo}. Também fundador da {hintify}.',
    learning: 'Aprofundando em Symfony, Slim, HyperF (PHP Assíncrono), Golang, Apache Kafka e PHP assíncrono com Swoole.',
    available: 'Disponível para freelance, consultoria e colaboração',
    articles: 'Artigos',
    seeMore: 'Ver mais',
    latestVideos: 'Últimos Vídeos',
    watch: 'Assistir',
    loadMore: 'Carregar mais',
    loadingVideos: 'Carregando vídeos...',
    backToHome: 'Voltar ao início',
    articleNotFound: 'Artigo não encontrado',
    goBack: 'Voltar',
    moreArticles: 'Mais artigos em breve...',
    channelSahdoio: 'Canal em inglês focado em implementações técnicas, PHP, frameworks, POCs e benchmarks.',
    channelDevafora: 'Canal em português sobre arquitetura, system design, DDD, entrevistas e carreira.',
  },
}

export function useI18n() {
  const locale = currentLocale

  function t(key: string): string {
    return messages[locale.value]?.[key] ?? key
  }

  function setLocale(l: Locale) {
    locale.value = l
  }

  return { locale, t, setLocale }
}
