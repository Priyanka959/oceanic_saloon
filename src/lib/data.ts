import { Service, BlogPost, TeamMember } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    name: 'Premium Haircut & Styling',
    slug: 'premium-haircut-styling',
    category: 'Hair',
    description:
      'Expert haircut and styling tailored to your face shape and personal style.',
    price: 45,
    duration: 60,
    image: '/assets/hair.jpg',
    benefits: [
      'Personalized consultation',
      'Professional styling products',
      'Complimentary hair wash',
      'Style maintenance tips',
    ],
  },
  {
    id: 2,
    name: 'Hair Care Treatment',
    slug: 'hair-care-treatment',
    category: 'Hair',
    description:
      'Deep conditioning and nourishing treatment for healthy, shiny hair.',
    price: 65,
    duration: 90,
    image: '/assets/Haircare.jpg',
    benefits: [
      'Deep conditioning',
      'Scalp massage',
      'Heat protection',
      'Long-lasting shine',
    ],
  },
  {
    id: 3,
    name: 'Facial & Skin Care',
    slug: 'facial-skin-care',
    category: 'Skin',
    description: 'Rejuvenating facial treatment for glowing, healthy skin.',
    price: 80,
    duration: 75,
    image: '/assets/Skin.jpg',
    benefits: [
      'Deep cleansing',
      'Exfoliation',
      'Hydrating mask',
      'Anti-aging treatment',
    ],
  },
  {
    id: 4,
    name: 'Advanced Skin Care',
    slug: 'advanced-skin-care',
    category: 'Skin',
    description:
      'Advanced skincare treatment with premium products for radiant skin.',
    price: 120,
    duration: 90,
    image: '/assets/Skincare.jpg',
    benefits: [
      'Customized treatment',
      'Premium products',
      'LED therapy',
      'Visible results',
    ],
  },
  {
    id: 5,
    name: 'Grooming Package',
    slug: 'grooming-package',
    category: 'Grooming',
    description:
      'Complete grooming package including beard trim, facial, and styling.',
    price: 95,
    duration: 120,
    image: '/assets/grooming.jpg',
    benefits: [
      'Beard shaping',
      'Hot towel treatment',
      'Facial massage',
      'Premium grooming products',
    ],
  },
  {
    id: 6,
    name: 'Bridal Makeup & Styling',
    slug: 'bridal-makeup-styling',
    category: 'Makeup',
    description:
      'Complete bridal makeup and hair styling for your special day.',
    price: 250,
    duration: 180,
    image: '/assets/hair.jpg',
    benefits: [
      'Professional bridal makeup',
      'Hair styling & updos',
      'Long-lasting finish',
      'Trial session included',
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Hair Care Tips for Healthy Hair',
    slug: '10-hair-care-tips',
    excerpt:
      'Discover essential tips to maintain healthy, shiny hair all year round.',
    content:
      'Maintaining healthy hair requires consistent care and the right products. Here are our top 10 tips: 1. Use sulfate-free shampoo, 2. Deep condition weekly, 3. Protect from heat damage, 4. Trim regularly, 5. Eat a balanced diet, 6. Stay hydrated, 7. Avoid over-washing, 8. Use silk pillowcases, 9. Protect from sun damage, 10. Manage stress levels.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Hair Care',
    image: '/assets/Haircare.jpg',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Ultimate Skincare Routine',
    slug: 'ultimate-skincare-routine',
    excerpt: 'Learn the perfect skincare routine for glowing, youthful skin.',
    content:
      'A proper skincare routine is essential for healthy skin. Follow these steps: Morning - Cleanse, tone, apply vitamin C serum, moisturize, and use SPF. Evening - Double cleanse, exfoliate (2-3 times weekly), apply retinol or treatment serum, use eye cream, and finish with night cream. Remember to stay hydrated and get adequate sleep.',
    author: 'Dr. Emily Chen',
    date: '2024-01-10',
    category: 'Skin Care',
    image: '/assets/Skincare.jpg',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Grooming Essentials for Men',
    slug: 'grooming-essentials-men',
    excerpt: 'Essential grooming tips every modern man should know.',
    content:
      'Modern grooming goes beyond basic hygiene. Key essentials include: Regular haircuts every 4-6 weeks, proper beard maintenance, skincare routine with cleanser and moisturizer, nail care, eyebrow grooming, and using quality grooming products. Invest in good tools like a quality razor, trimmer, and grooming scissors.',
    author: 'Michael Roberts',
    date: '2024-01-05',
    category: 'Grooming',
    image: '/assets/grooming.jpg',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'Mastering the Art of Eye Makeup',
    slug: 'mastering-eye-makeup',
    excerpt:
      'Learn professional techniques for stunning, dramatic eye makeup looks.',
    content:
      'Eye makeup is an art form that can transform your entire look. Master these techniques: Start with a primer for long-lasting wear, blend eyeshadow in the crease for dimension, use a quality eyeliner for precision, apply false lashes for drama, and finish with mascara. Remember to choose colors that complement your eye color and skin tone.',
    author: 'Sarah Johnson',
    date: '2024-01-20',
    category: 'Makeup',
    image: '/assets/blog4.jpg',
    readTime: '6 min read',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Master Stylist',
    bio: 'With over 15 years of experience, Sarah specializes in cutting-edge hair techniques and color treatments.',
    image: '/assets/expert1.jpg',
  },
  {
    id: 2,
    name: 'Dr. Emily Chen',
    role: 'Skincare Specialist',
    bio: 'Board-certified dermatologist offering advanced skincare treatments and personalized consultations.',
    image: '/assets/expert2.jpg',
  },
  {
    id: 3,
    name: 'Michael Roberts',
    role: 'Grooming Expert',
    bio: "Specializing in men's grooming, beard styling, and traditional barbering techniques.",
    image: '/assets/expert3.jpg',
  },
];
