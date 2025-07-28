export function useArticles() {
  return [
    {
      title: 'The Rise of Clean Architecture in PHP',
      date: '2024',
      slug: 'clean-architecture-php',
      cover: '/articles/clean-architecture-cover.jpg',
      content: `
        <h2>What is Clean Architecture?</h2>
        <p>Clean architecture separates concerns and creates maintainable systems...</p>
    
        <div class="border-l-4 border-yellow-400 bg-yellow-900/30 p-4 rounded-md my-6">
          <strong>💡 Note:</strong> Always decouple your business rules from frameworks.
        </div>
    
        <pre><code class="language-php">
        class UseCase {
          public function execute(Request $request): Response {
            return $this->service->run($request);
          }
        }
        </code></pre>
      `
    },
    {
      slug: 'nuxt-ssr-future',
      title: 'Why Nuxt is the Future of SSR',
      date: 'Soon',
      content: `
        <p>Nuxt has become a strong alternative for SSR (Server-Side Rendering) with Vue.js.</p>
        <p>Discover how the Nitro engine, Vite, and Islands architecture will shape the future of the web.</p>
      `
    },
    {
      slug: 'rabbitmq-vs-kafka',
      title: 'RabbitMQ vs Kafka for Your Queues',
      date: '2024',
      content: `
        <p>What’s the best choice for your messaging system: RabbitMQ or Kafka?</p>
        <p>This article compares them from a backend developer perspective.</p>
      `
    }
  ]
}
