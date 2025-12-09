export interface NavLink {
    label: string;
    href: string;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    tags: string[];
}

export interface Article {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
    theme: 'light' | 'dark'; // mint vs navy
}