'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';

export default function HomePage() {
  const { data: session, status } = useSession();
  const greeted = useRef(false);

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.name && !greeted.current) {
      toast.success(`Hello, ${session.user.name}! 👋`, {
        duration: 1000,
        style: {
          background: '#333',
          color: '#fff',
        },
      });
      greeted.current = true;
    }
  }, [status, session]);

  return (
    <main>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/blackandwhite.jpg"
            alt="Background"
            className="w-full h-full object-cover transform scale-90 opacity-40"
          />
        </div>

        {/* Navbar + Content */}
        <div className="relative z-10">
          <Navbar />

          <section className="pt-[200px] px-[30px] max-w-7xl mx-auto min-h-[400px] flex items-center">
            <div className="flex flex-col w-full items-center gap-20">
              <div className="flex flex-col md:flex-row justify-between w-full gap-10">
                {/* Left Side */}
                <div className="md:w-1/2 w-full text-left md:-ml-12">
                  <h2 className="text-yellow-600 text-5xl font-bold mb-4">
                    &lt;coder /&gt;
                  </h2>
                  <p className="text-white text-2xl">
                    It's been around 2 years since I started doing coding.
                    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
                  </p>
                </div>

                {/* Right Side */}
                <div className="md:w-1/2 w-full text-left md:-mr-12">
                  <h2 className="text-red-600 text-5xl font-bold mb-4">
                    Programmer?
                  </h2>
                  <p className="text-white text-2xl">
                    Let's collaborate — we can make good programs.
                    "Testing leads to failure, and failure leads to understanding." - Burt Rutan
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Chatbot with user info */}
      <div id="chatbot">
        <ChatBot user={session?.user?.name} />
      </div>
    </main>
  );
}
