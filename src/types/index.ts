export interface Service {
  id: number;
  name: string;
  slug: string;
  category: 'Hair' | 'Skin' | 'Grooming' | 'Makeup';
  description: string;
  price: number;
  duration: number;
  image: string;
  benefits: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  // Optional read time for display (e.g. '5 min read')
  readTime?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
