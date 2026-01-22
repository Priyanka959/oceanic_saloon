'use client';

import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, IndianRupee, Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { use } from 'react';

interface ServicePageProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get related services from same category
  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2c1810] via-[#1a0f0a] to-[#0f0705] py-32">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

        {/* Elegant background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,165,116,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,165,116,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="mb-8 inline-flex items-center gap-2 text-[#f5f0e8]/70 transition-colors hover:text-[#f5f0e8]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a574]/40 bg-[#d4a574]/15 px-4 py-2 text-sm font-medium tracking-wide text-[#d4a574]">
              {service.category}
            </span>
            <h1 className="mb-4 font-serif text-4xl font-bold text-[#f5f0e8] md:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#f5f0e8]/70">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{service.duration} min</span>
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee className="h-5 w-5" />
                <span>From ₹{service.price}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video overflow-hidden rounded-2xl shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.image || '/assets/placeholder.jpg'})`,
                  backgroundColor: '#1a1a1a',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] md:text-3xl">
                About This Service
              </h2>
              <p className="text-lg leading-relaxed text-[#666666]">
                {service.description}
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] md:text-3xl">
                Benefits
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {service.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4"
                  >
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#c5a47e]">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[#1a1a1a]">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-28 space-y-6"
            >
              {/* Booking Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8 text-white shadow-xl">
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#c5a47e]/20">
                    <Clock className="h-8 w-8 text-[#c5a47e]" />
                  </div>
                  <h3 className="mb-2 font-serif text-2xl font-bold">
                    Book Now
                  </h3>
                  <p className="text-sm text-white/70">
                    Experience the luxury of our {service.name} service
                  </p>
                </div>

                <div className="mb-6 rounded-xl bg-white/10 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-white/70">Price</span>
                    <span className="text-2xl font-bold">₹{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Duration</span>
                    <span className="font-semibold">
                      {service.duration} mins
                    </span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full rounded-full bg-[#c5a47e] py-6 font-semibold text-white shadow-lg hover:bg-[#b89468]"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="mt-4 text-center text-xs text-white/60">
                  * Prices may vary based on hair length and stylist level
                </p>
              </div>

              {/* Contact Quick Info */}
              <div className="rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
                <h4 className="mb-4 font-bold text-[#1a1a1a]">
                  Have Questions?
                </h4>
                <p className="mb-4 text-sm text-[#666666]">
                  Contact us for more information about this service.
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <h2 className="mb-8 font-serif text-3xl font-bold text-[#1a1a1a] md:text-4xl">
              Related Services
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedServices.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/services/${related.slug}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-lg transition-all hover:shadow-xl"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${related.image || '/assets/placeholder.jpg'})`,
                            backgroundColor: '#1a1a1a',
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4 rounded-full bg-[#c5a47e] px-3 py-1 text-sm font-bold text-white">
                          ₹{related.price}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#1a1a1a] transition-colors group-hover:text-[#c5a47e]">
                          {related.name}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm text-[#666666]">
                          {related.description}
                        </p>
                      </div>
                    </motion.div>
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
