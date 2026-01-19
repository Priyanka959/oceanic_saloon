'use client';

import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { Calendar, User, ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';

interface BlogPostPageProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts from same category
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blogs"
              className="mb-8 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="mb-6 inline-block rounded-full bg-[#c5a47e] px-4 py-2 text-sm font-medium text-white">
              {post.category}
            </span>
            <h1 className="mb-6 font-serif text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-10 aspect-video overflow-hidden rounded-2xl shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${post.image || '/assets/placeholder.jpg'})`,
                  backgroundColor: '#1a1a1a',
                }}
              />
            </motion.div>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-lg max-w-none"
            >
              <p className="mb-8 border-l-4 border-[#c5a47e] pl-6 text-xl leading-relaxed font-medium text-[#666666]">
                {post.excerpt}
              </p>
              <div className="leading-relaxed whitespace-pre-wrap text-[#1a1a1a]">
                {post.content}
              </div>
            </motion.article>

            {/* Tags & Share */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 border-t border-[#e5e5e5] pt-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-[#666666]">Tags:</span>
                  <span className="rounded-full bg-[#f5f5f5] px-4 py-1 text-sm text-[#1a1a1a]">
                    {post.category}
                  </span>
                  <span className="rounded-full bg-[#f5f5f5] px-4 py-1 text-sm text-[#1a1a1a]">
                    Beauty
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-[#666666]">Share:</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-xs font-bold text-white transition-colors hover:bg-[#c5a47e]"
                  >
                    F
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-xs font-bold text-white transition-colors hover:bg-[#c5a47e]"
                  >
                    X
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-xs font-bold text-white transition-colors hover:bg-[#c5a47e]"
                  >
                    in
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-28 space-y-8"
            >
              {/* Author Card */}
              <div className="rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-xl font-bold text-white">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a]">{post.author}</h4>
                    <p className="text-sm text-[#666666]">Beauty Expert</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#666666]">
                  Our expert team shares their knowledge and tips to help you
                  look and feel your best.
                </p>
              </div>

              {/* Categories */}
              <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-lg">
                <h4 className="mb-4 font-bold text-[#1a1a1a]">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.map((p) => p.category))).map(
                    (cat) => (
                      <span
                        key={cat}
                        className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          cat === post.category
                            ? 'bg-[#c5a47e] text-white'
                            : 'bg-[#f5f5f5] text-[#666666] hover:bg-[#c5a47e] hover:text-white'
                        }`}
                      >
                        {cat}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Book Appointment CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-6 text-white">
                <h4 className="mb-2 text-xl font-bold">
                  Ready for a Transformation?
                </h4>
                <p className="mb-4 text-sm text-white/80">
                  Book your appointment today and experience the difference.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c5a47e] py-3 font-semibold text-white transition-colors hover:bg-[#b89468]"
                  >
                    Book Now <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <h2 className="mb-8 font-serif text-3xl font-bold text-[#1a1a1a] md:text-4xl">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blogs/${related.slug}`}>
                    <motion.article
                      whileHover={{ y: -8 }}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-lg transition-all hover:shadow-xl"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${related.image || '/assets/placeholder.jpg'})`,
                            backgroundColor: '#1a1a1a',
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="line-clamp-2 text-lg font-bold text-[#1a1a1a] transition-colors group-hover:text-[#c5a47e]">
                          {related.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 flex-1 text-sm text-[#666666]">
                          {related.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-[#666666]">
                          <Calendar className="h-3 w-3" />
                          <span>{related.date}</span>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
