import React from 'react';

export function Copyright() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 bg-gray-800 text-white text-center text-sm">
      <p>© {new Date().getFullYear()} Aryan Acharya. All rights reserved.</p>
    </div>
  );
}