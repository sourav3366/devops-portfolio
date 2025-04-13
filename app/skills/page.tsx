'use client';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div className="mb-4 sm:mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200">{skill}</span>
      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{level}%</span>
    </div>
    <motion.div
      className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 dark:bg-gray-700"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-blue-600 h-2 sm:h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  </div>
);

const skills = {
  'Cloud Platforms': [
    { name: 'AWS', level: 90 },
    { name: 'Azure', level: 85 },
    { name: 'GCP', level: 80 },
  ],
  'CI/CD': [
    { name: 'Jenkins', level: 95 },
    { name: 'GitLab CI', level: 90 },
    { name: 'GitHub Actions', level: 85 },
  ],
  'Infrastructure as Code': [
    { name: 'Terraform', level: 95 },
    { name: 'CloudFormation', level: 85 },
    { name: 'Ansible', level: 90 },
  ],
};

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
        Technical Skills
      </h1>
      
      {Object.entries(skills).map(([category, categorySkills]) => (
        <div key={category} className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            {category}
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {categorySkills.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}