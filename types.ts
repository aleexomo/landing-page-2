// FIX: Import React to resolve the 'React' namespace for ElementType.
import React from 'react';

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Course {
  image: string;
  title:string;
  description: string;
  ageGroup: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}