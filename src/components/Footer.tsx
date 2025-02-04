import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white">
      <div className="container mx-auto py-2 px-4 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Aryan Acharya. All rights reserved.</p>
        <a
          href="https://github.com/aryan1112003"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <Github size={20} />
          <span>@aryan1112003</span>
        </a>
      </div>
    </div>
  );
}