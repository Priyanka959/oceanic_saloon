'use client';

import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        className="group flex h-full cursor-pointer flex-col overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/blogs/${post.slug}`} className="block">
          <div className="bg-muted relative aspect-video w-full overflow-hidden">
            {/* Image with zoom effect */}
            <motion.div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${post.image})`,
                imageRendering: 'crisp-edges',
              }}
              animate={{ scale: isHovered ? 1.15 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#7A2828]/90 via-[#7A2828]/40 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* Category badge */}
            <motion.div
              className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#7A2828] shadow-lg backdrop-blur-sm"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {post.category}
            </motion.div>

            {/* Read more indicator */}
            <motion.div
              className="absolute right-4 bottom-4 rounded-full bg-white p-3 shadow-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="h-5 w-5 text-[#7A2828]" />
            </motion.div>
          </div>
        </Link>

        <CardHeader>
          <div className="mb-2 flex items-center gap-2 text-xs text-[#5C3D3D]">
            <motion.div
              className="flex items-center gap-1"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="h-3 w-3 text-[#7A2828]" />
              <span>{formatDate(post.date)}</span>
            </motion.div>
          </div>
          <CardTitle className="line-clamp-2 text-xl text-[#7A2828]">
            <Link
              href={`/blogs/${post.slug}`}
              className="decoration-2 underline-offset-2 transition-colors group-hover:underline hover:text-[#A04848]"
            >
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-3 text-[#5C3D3D]">
            {post.excerpt}
          </CardDescription>
        </CardHeader>

        <CardFooter className="mt-auto">
          <Link href={`/blogs/${post.slug}`} className="w-full">
            <motion.div
              className="flex items-center gap-2 font-semibold text-[#7A2828] transition-colors group-hover:text-[#A04848]"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span>Read Article</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
