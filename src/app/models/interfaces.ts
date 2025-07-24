export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  price?: string;
  instructor?: string;
  duration?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  position?: string;
  rating?: number;
}

export interface Partner {
  name: string;
  logo: string;
  website?: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
} 