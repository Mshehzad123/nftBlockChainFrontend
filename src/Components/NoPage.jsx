import React from 'react';

function NoPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg text-gray-700">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NoPage;
