'use client';

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export default function Chatbot({ user }) {
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const messagesEndRef = useRef(null);
  const inviteShownRef = useRef(false);

  // Show invite popup once after login
  useEffect(() => {
    if (user && !inviteShownRef.current) {
      inviteShownRef.current = true;
      setShowInvite(true);
      setTimeout(() => setShowInvite(false), 5000);
    }
  }, [user]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post(
        'http://localhost:8000/chat',
        { message: input },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const botMessage = { sender: 'bot', text: res.data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: '⚠️ Error communicating with AI.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Invite message */}
      {!expanded && showInvite && user && (
        <div className="mb-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          💬 Hey {user}, let's chat!
        </div>
      )}

      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          className="bg-blue-500 hover:bg-blue-300 text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
          aria-label="Open chat"
        >
          <span className="text-xl" aria-hidden="true">💬</span>
          <span className="font-medium">Chat with Creator</span>
        </button>
      ) : (
        <div className="w-[340px] max-h-[480px] bg-[#1e1e1e] text-white rounded-xl shadow-xl flex flex-col border border-gray-700">
          {/* Header with photo */}
          <div className="flex justify-between items-center bg-blue-500 text-black px-4 py-2 rounded-t-xl">
            <div className="flex items-center gap-2">
              <img
                src="/pic.jpg" // Replace this with your actual image file name
                alt="Bishal"
                className="w-8 h-8 rounded-full border border-white"
              />
              <span className="font-semibold">Chat with Bishal</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={resetChat}
                className="text-sm font-semibold hover:underline"
                title="Clear Chat"
                aria-label="Clear chat"
              >
                🗑
              </button>
              <button
                onClick={() => setExpanded(false)}
                className="text-black font-bold text-xl"
                title="Close"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-3 py-2 rounded max-w-[85%] whitespace-pre-line ${
                  msg.sender === 'user' ? 'bg-yellow-700 ml-auto' : 'bg-gray-700 mr-auto'
                }`}
                role="article"
                aria-live="polite"
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="text-xs text-gray-400 italic mr-auto" aria-live="assertive">
                Bishal is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center border-t border-gray-600 p-2">
            <input
              type="text"
              className="flex-1 bg-transparent text-white px-2 py-1 outline-none"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              aria-label="Chat input"
              autoComplete="off"
              autoFocus
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="text-yellow-400 px-2 text-xl font-bold hover:text-yellow-300"
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
