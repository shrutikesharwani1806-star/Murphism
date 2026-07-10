'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, AlertCircle } from 'lucide-react';

const SUGGESTIONS = [
  'What courses do you offer?',
  'Tell me about B.Sc. Animations & Multimedia',
  'Do you provide job placement support?',
  'How does the Custom Career Combo work?',
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm Murphi, your Murphism Academy AI Guide. Ask me anything about our courses, fees, degree programs, or career placement support!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSend = async (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    if (!textToSend) setInput('');
    setError('');
    
    // Add user message
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch response');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-[0_10px_30px_rgba(201,162,39,0.3)] transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} className="text-[#050507]" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare size={22} className="text-[#050507]" />
              {/* Subtle pulsing dot */}
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#050507] animate-ping" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#050507]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-24 z-50 w-auto sm:w-[400px] h-[70vh] sm:h-[550px] rounded-3xl flex flex-col overflow-hidden border border-[rgba(201,162,39,0.18)] shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          style={{
              background: 'radial-gradient(circle at top right, #0d0c09 0%, #050507 100%)',
            }}
          >
            {/* Header */}
            <div className="p-5 border-b border-[rgba(201,162,39,0.08)] flex items-center justify-between bg-gradient-to-r from-[rgba(201,162,39,0.06)] to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c9a227]/8 border border-[#c9a227]/25 flex items-center justify-center">
                  <Sparkles size={18} className="text-[#e8bf5a]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-wide font-sans">Murphi AI</h4>
                  <p className="text-[9px] text-[#22c55e] font-semibold flex items-center gap-1 font-mono tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" /> ONLINE
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full border border-white/5 hover:bg-white/5 flex items-center justify-center text-[#b8b099] hover:text-white transition-all duration-300"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Body */}
            <div data-lenis-prevent className="flex-1 overflow-y-auto p-5 space-y-4 select-text">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-[13px] leading-relaxed shadow-sm font-sans whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'text-[#050507] font-semibold'
                        : 'text-[#f0ece0] border border-white/5'
                    }`}
                    style={{
                      background: msg.role === 'user' 
                        ? 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)' 
                        : 'rgba(255, 255, 255, 0.03)',
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8bf5a] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8bf5a] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8bf5a] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 text-red-400 text-xs bg-red-950/20 border border-red-500/20 p-3 rounded-xl">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Classy Horizontal Suggestion Pills (Visible on launch) */}
            {messages.length === 1 && !loading && (
              <div className="px-5 pb-4">
                <p className="text-[10px] text-[#8c8476] uppercase tracking-widest mb-2 font-semibold">Suggested:</p>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="whitespace-nowrap text-left text-[11px] text-[#e8bf5a] hover:text-white bg-[#c9a227]/5 hover:bg-[#c9a227]/12 border border-[#c9a227]/20 hover:border-[#c9a227]/40 px-3 py-2 rounded-xl transition-all duration-300 flex-shrink-0"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-4 border-t border-[rgba(201,162,39,0.08)] bg-[#050507]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about courses, placements..."
                  disabled={loading}
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#c9a227]/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#c9a227] text-[#050507] hover:bg-[#e8bf5a] transition-all disabled:opacity-40 disabled:hover:bg-[#c9a227] cursor-pointer"
                >
                  <Send size={15} />
                </button>
              </form>
              <p className="text-[9px] text-[#6b6459] text-center mt-2.5 font-mono tracking-wider">
                Authorized AI assistant of Murphism Academy
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
