import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">App is Loading...</h1>
      <p className="text-gray-400">If you see this, the basic setup is working.</p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-8 px-6 py-3 bg-white text-black rounded-sm"
      >
        Refresh
      </button>
    </div>
  );
}
