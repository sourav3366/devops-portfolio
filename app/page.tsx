'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';



import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailClick = () => {
    window.open('mailto:youremail@example.com', '_blank'); // Replace with your actual email
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/yourlinkedin', '_blank'); // Replace with your actual LinkedIn
  };
  const handleGitHubClick = () => {
    window.open('https://github.com/yourgithub', '_blank'); // Replace with your actual Github
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      <div>

      
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
         {/* Contact Me Section */}
        <div className="mt-12 mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Me
          </button>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Contact Me
              </h3>  <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <BsTelephoneFill className="text-blue-500 dark:text-blue-300" />
                  <span className="text-gray-900 dark:text-gray-100 text-lg">+1234567890</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                  <FaEnvelope className="text-blue-500 dark:text-blue-300" />
                    <span className="text-lg ml-4">Email</span></div>
                  <button onClick={handleEmailClick} className="flex items-center">
                <FaExternalLinkAlt className="text-sm ml-2" />
                  </button>
                </li>
                <li className="flex items-center justify-between">
                 <div className="flex items-center">
                  <FaLinkedin className="text-blue-500 dark:text-blue-300" />
                    <span className="text-lg ml-4">LinkedIn</span></div>
                  <button onClick={handleLinkedInClick} className="flex items-center">
                  <FaExternalLinkAlt className="text-sm ml-2" />
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                  <FaGithub className="text-blue-500 dark:text-blue-300" />
                    <span className="text-lg ml-4">GitHub</span></div>
                  <button onClick={handleGitHubClick} className="flex items-center">
                <FaExternalLinkAlt className="text-sm ml-2" />
                  </button>
                </li>
              </ul>
              <button onClick={handleCloseModal} className="mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-full">Close</button>
            </div>
          </div>
        )}
    </div>
  );
}
