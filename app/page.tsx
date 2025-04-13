'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mt-8 sm:mt-16 text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          DevOps Engineer & Cloud Architect
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
          Specializing in cloud infrastructure, automation, and continuous delivery
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {['AWS', 'Azure', 'GCP'].map((platform) => (
            <div
              key={platform}
              className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{platform}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Certified Professional
              </p>
            </div>
          ))}
        </div>
        <div className="prose dark:prose-invert mx-auto px-4 sm:px-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            With over X years of experience in DevOps and cloud architecture,
            I specialize in building and maintaining scalable, reliable infrastructure
            for modern applications. My expertise includes containerization,
            infrastructure as code, and implementing robust CI/CD pipelines.
          </p>
        </div>
      </motion.div>
    </div>
  );
}