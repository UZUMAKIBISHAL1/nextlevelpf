'use client';

import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black  text-white">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-80px)]">
        
        {/* Left Side - Larger Circular Image */}
        <div className="flex items-center justify-center">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/part2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Heading and Description */}
        <div className="flex items-center justify-center px-10 py-16">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold mb-6">
              <span className="text-white">Hi, I am</span>{' '}
              <span className="text-yellow-600"> Bishal</span>
            </h1>
            <p className="text-base text-gray-300 leading-relaxed">
              Firstly thanks for visiting my page since you know i am the creator of this page — feel free to reach out 
              or check out my GitHub. I won't make this more lengthy if you want to know more about me just visit my contact 
              section and  see my projects on git or any other platforms . Make sure to signup . Thanks for stopping by!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
