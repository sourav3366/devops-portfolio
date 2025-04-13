'use client';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Getting Started with Kubernetes',
    date: '2023-09-01',
    excerpt: 'Learn the basics of container orchestration with Kubernetes...',
    slug: 'getting-started-with-kubernetes',
  },
  // Add more blog posts
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
        Blog
      </h1>
      
      <div className="space-y-6 sm:space-y-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {post.title}
            </h2>
            <time className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 block">
              {post.date}
            </time>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <a
              href={`/blog/${post.slug}`}
              className="text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Read more →
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
}