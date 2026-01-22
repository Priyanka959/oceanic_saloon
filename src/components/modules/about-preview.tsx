'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, Star } from 'lucide-react';

export function AboutPreview() {
  const features = [
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Decade of excellence in beauty & grooming',
    },
    {
      icon: Shield,
      title: 'Hygiene First',
      description: 'Hospital-grade sterilization protocols',
    },
    {
      icon: Users,
      title: 'Expert Professionals',
      description: 'Trained & certified stylists',
    },
    {
      icon: Star,
      title: 'Premium Products',
      description: 'Only the best brands used',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-[0.2em] text-[#c5a47e] uppercase"
            >
              Welcome to Oceanic Salon
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl font-bold text-white md:text-5xl"
            >
              About Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed text-white/80"
            >
              At Oceanic Salon, we combine artistry with expertise to deliver
              exceptional beauty experiences. Our team of skilled professionals
              is dedicated to helping you look and feel your absolute best,
              using only premium products and the latest techniques in hair,
              skin, and grooming services.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg leading-relaxed text-white/80"
            >
              We believe that everyone deserves to experience luxury and care.
              That&apos;s why we&apos;ve created a welcoming, inclusive space
              where you can relax, rejuvenate, and emerge feeling confident and
              beautiful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-[#c5a47e] px-8 font-semibold text-[#1a1a1a] hover:bg-[#d4b896]"
                >
                  Read More About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15"
              >
                <feature.icon className="mb-4 h-10 w-10 text-[#c5a47e]" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements - hidden on mobile to prevent overflow */}
      <motion.div
        className="absolute top-20 right-20 hidden h-40 w-40 rounded-full border border-[#c5a47e]/20 md:block"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 left-20 hidden h-24 w-24 rounded-full border border-[#c5a47e]/30 md:block"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      />
    </section>
  );
}
