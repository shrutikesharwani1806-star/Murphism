'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ChevronRight, Search, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BLOG_POSTS = [
  {
    title: 'Best Video Editing Course in Indore: The Ultimate Guide',
    slug: 'best-video-editing-course-indore',
    description: 'Looking to build a professional career in video editing? Discover what makes Murphism Academy the top choice for hands-on, studio-level video editing training in Indore.',
    category: 'Video Editing',
    date: 'August 24, 2026',
    readTime: '6 min read',
    image: '/courses/video-editing.webp',
    featured: true,
  },
  {
    title: 'Career After B.Sc. Animation & Multimedia: Jobs, Salaries, & Scope',
    slug: 'career-after-bsc-animation-multimedia',
    description: 'Explore the high-growth career options, average salaries, and creative paths waiting for you after graduating with a B.Sc. in Animation and Multimedia degree.',
    category: 'VFX & Animation',
    date: 'August 20, 2026',
    readTime: '8 min read',
    image: '/courses/bsc-animation.webp',
    featured: false,
  },
  {
    title: 'Premiere Pro vs After Effects: Which One Should You Learn First?',
    slug: 'premiere-pro-vs-after-effects',
    description: 'Understand the core differences, specialized use cases, and editing workflows of Premiere Pro and After Effects to see where your post-production journey should start.',
    category: 'Video Editing',
    date: 'August 15, 2026',
    readTime: '5 min read',
    image: '/courses/specialization.webp',
    featured: false,
  },
  {
    title: 'How to Become a Video Editor in 2026: A Step-by-Step Guide',
    slug: 'how-to-become-video-editor',
    description: 'From learning the software fundamentals to editing your first industry-standard showreel, here is the complete road map to becoming a high-paid video editor.',
    category: 'Video Editing',
    date: 'August 10, 2026',
    readTime: '7 min read',
    image: '/courses/web-development.webp',
    featured: false,
  },
  {
    title: 'Booming Career Opportunities in VFX and Animation in India',
    slug: 'career-opportunities-vfx-animation',
    description: 'Delve into India’s rapidly expanding animation, visual effects, and gaming industries, and learn about the skills top global studios are actively searching for.',
    category: 'VFX & Animation',
    date: 'August 05, 2026',
    readTime: '6 min read',
    image: '/courses/vfx.webp',
    featured: false,
  },
  {
    title: 'Essential AI Tools for Modern Content Creators in 2026',
    slug: 'ai-tools-for-content-creators',
    description: 'Supercharge your editorial workflows and content output using these game-changing generative AI tools for writing, voiceover, styling, and editing.',
    category: 'AI & Content',
    date: 'July 28, 2026',
    readTime: '5 min read',
    image: '/courses/ai-courses.webp',
    featured: false,
  },
];

const CATEGORIES = ['All', 'Video Editing', 'VFX & Animation', 'AI & Content'];

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((post) => post.featured);
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-[#d4cebe] font-sans selection:bg-[#c9a227]/30 selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Background radial glows */}
      <div
        className="absolute top-[10vh] left-[-20vw] w-[50vw] h-[50vw] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201, 162, 39, 0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[20vh] right-[-20vw] w-[55vw] h-[55vw] rounded-full blur-[180px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-tag">Murphism Insights</div>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">
            The Editorial <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a]">Journal</span>
          </h1>
          <div className="divider-gold mx-auto" />
          <p className="text-[#b8b099] text-sm md:text-base leading-relaxed">
            Delve into professional industry analyses, technical tutorials, career guides, and actionable resources curated by expert mentors.
          </p>
        </div>

        {/* Featured Post (only shown when no filters are active) */}
        {selectedCategory === 'All' && searchQuery === '' && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="text-xs font-bold text-[#c9a227] tracking-[0.2em] uppercase mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Featured Article
            </div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group grid lg:grid-cols-12 gap-8 p-6 md:p-8 rounded-3xl border border-[rgba(201,162,39,0.15)] bg-gradient-to-br from-[#0f0e0b] to-[#080705] hover:border-[#c9a227]/40 transition-all duration-500 overflow-hidden relative">
                {/* Image panel */}
                <div className="lg:col-span-7 aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 border border-white/5 relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#c9a227] text-black text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded">
                    {featuredPost.category}
                  </div>
                </div>

                {/* Content Panel */}
                <div className="lg:col-span-5 flex flex-col justify-between py-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-[#6b6459] font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold group-hover:text-[#e8bf5a] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-[#b8b099] text-sm leading-relaxed line-clamp-3">
                      {featuredPost.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-6 flex items-center text-sm font-bold text-[#c9a227] group-hover:text-[#e8bf5a] transition-colors gap-1">
                    Read Article <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between border-b border-white/5 pb-8 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#c9a227] border-[#c9a227] text-black shadow-[0_4px_12px_rgba(201,162,39,0.2)]'
                    : 'bg-transparent border-white/10 text-[#6b6459] hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-sm w-full order-1 md:order-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6459]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0f0e0b] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-white placeholder-[#6b6459] focus:outline-none focus:border-[#c9a227]/40 transition-colors"
            />
          </div>
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group border border-[rgba(201,162,39,0.12)] bg-[#0f0e0b] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#c9a227]/30 hover:bg-[#161410] transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="flex-1 flex flex-col">
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/5 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0f0e0b]/80 backdrop-blur-md text-[8px] font-black tracking-widest uppercase px-2 py-0.5 rounded border border-white/10 text-[#e8bf5a]">
                      {post.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3.5 text-[10px] text-[#6b6459] font-semibold">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#c9a227]" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#c9a227]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-white text-base md:text-lg font-bold group-hover:text-[#e8bf5a] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-[#6b6459] text-[11px] leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-5 flex items-center text-[11px] font-bold text-[#c9a227] gap-0.5 group-hover:text-[#e8bf5a] transition-colors">
                      Read Post <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#0f0e0b] rounded-2xl border border-white/5">
            <p className="text-[#6b6459] text-sm">No articles match your search or filter.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
