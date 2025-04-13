'use client';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
            Resume
          </h1>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Download PDF
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-8">
          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Experience
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Senior DevOps Engineer
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Company Name • 2020 - Present
                </p>
                <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li>Led cloud infrastructure migration projects</li>
                  <li>Implemented CI/CD pipelines</li>
                  <li>Managed Kubernetes clusters</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Education
            </h2>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                University Name • 2016 - 2020
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Certifications
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                  AWS Certified Solutions Architect
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Amazon Web Services • 2022
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}