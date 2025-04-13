'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Cloud Migration Project',
    role: 'Lead DevOps Engineer',
    description: 'Led the migration of a monolithic application to microservices architecture on AWS.',
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    features: [
      'Containerized application services',
      'Implemented CI/CD pipeline',
      'Set up monitoring and alerting',
    ],
    githubUrl: '#',
    demoUrl: '#',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
        Projects Portfolio
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                {project.role}
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  className="text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
                <a
                  href={project.demoUrl}
                  className="text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}