export type ServiceCategory = 'all' | 'marketing' | 'development';

export interface ServiceDetail {
  id: string;
  category: 'marketing' | 'development';
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  highlights: string[];
  deliverables: string[];
  tools: string[];
  metrics: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'marketing' | 'development' | 'both';
  image: string;
  problem: string;
  solution: string;
  results: {
    label: string;
    value: string;
    change: string;
  }[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatar: string;
  service: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  timeline: string;
  details: string[];
}

export interface ProjectInquiry {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
