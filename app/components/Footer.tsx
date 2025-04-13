import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-blue-500 hover:underline mx-2">Twitter</a>
          <a href="#" className="text-blue-500 hover:underline mx-2">LinkedIn</a>
          <a href="#" className="text-blue-500 hover:underline mx-2">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;