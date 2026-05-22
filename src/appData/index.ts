// Data for portfolio
import {
  DockerIcon,
  ExpressjsIcon,
  GitIcon,
  JavaIcon,
  JavaScriptIcon,
  KafkaIcon,
  KubernetesIcon,
  LaravelIcon,
  Neo4jIcon,
  NodejsIcon,
  PythonIcon,
  RedisIcon,
  SocketIcon,
  SpringBootIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Integrated Ticketing System - PT ASDP Ferry Indonesia',
    shortDescription:
      'Developing enterprise-level integrated ticketing system with a focus on system reliability, scalability, and service integration using Java Spring Boot and microservices.',
    cover: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://www.indonesiaferry.co.id/',
    type: 'Enterprise �',
    siteAge: 'Current',
  },
  {
    priority: 2,
    title: 'SISTALA-DSP - BNPB',
    shortDescription:
      'Disaster fund distribution system supporting secure and reliable backend workflows, ensuring transactional integrity for critical government services using Laravel.',
    cover: 'https://images.unsplash.com/photo-1596910547037-846b1980324c?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://bnpb.go.id/',
    type: 'Government 🏛️',
    siteAge: '2024',
  },
  {
    priority: 3,
    title: 'Paper Recommendation System',
    shortDescription:
      'A hybrid approach combining graph embeddings (Node2Vec and FastRP) with NLP-based text embedding techniques using Python and Neo4j. Under review in SINTA 3 journal.',
    cover: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop',
    livePreview: '#',
    type: 'Research 📚',
    siteAge: '2025',
  },
  {
    priority: 4,
    title: 'FTGO Backend - Microservices',
    shortDescription:
      'Implementation of Saga Pattern in a backend application using Spring Boot, Kafka, and microservices architecture to handle distributed transactions.',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://github.com/',
    type: 'Architecture 🏗️',
    siteAge: '2024',
  },
]

// Service Data
export const serviceData = [
  {
    iconName: 'NodejsIcon',
    title: 'Backend Development',
    shortDescription:
      'Building scalable and reliable backend systems using Java Spring Boot, Laravel, and Node.js with a focus on microservices and event-driven architecture.',
  },
  {
    iconName: 'PythonIcon',
    title: 'AI/ML Engineering',
    shortDescription:
      'Developing graph-based recommendation models and NLP-based text embedding techniques to improve semantic understanding and accuracy.',
  },
  {
    iconName: 'JavaIcon',
    title: 'Data Science',
    shortDescription:
      'Analyzing complex datasets and building predictive models using Python, Neo4j, and modern data science tools.',
  },
]

// Skill List
export const skillList = [
  { name: 'Java', iconName: 'JavaIcon' },
  { name: 'Spring Boot', iconName: 'SpringBootIcon' },
  { name: 'Python', iconName: 'PythonIcon' },
  { name: 'Laravel', iconName: 'LaravelIcon' },
  { name: 'Docker', iconName: 'DockerIcon' },
  { name: 'Kubernetes', iconName: 'KubernetesIcon' },
  { name: 'Kafka', iconName: 'KafkaIcon' },
  { name: 'Redis', iconName: 'RedisIcon' },
  { name: 'Neo4j', iconName: 'Neo4jIcon' },
  { name: 'Git', iconName: 'GitIcon' },
]

export const experienceData = [
  {
    company: 'PT Swamedia Informatika',
    role: 'Backend Developer',
    period: 'Aug 2025 - Present',
    description:
      'Developing backend services using Java Spring Boot within a microservices and event-driven architecture. Contributed to Port Service and Surrounding Service development.',
  },
  {
    company: 'Freelance Web Developer',
    role: 'Fullstack Developer',
    period: 'Jun 2025 - Present',
    description:
      'Developing web-based applications for clothing product sales and internal operational applications for CV Buci Embroidery.',
  },
  {
    company: 'Politeknik Negeri Bandung',
    role: 'Research Assistant',
    period: 'Jun 2025 - Sep 2025',
    description:
      'Developed a paper recommendation system using Node2Vec and FastRP graph embedding methods combined with NLP-based text embedding techniques.',
  },
  {
    company: 'PT Someah Kreatif Nusantara',
    role: 'Backend Developer',
    period: 'Jun 2024 - Oct 2024',
    description:
      'Developed the SISTALA–DSP (BNPB) platform using Laravel, HRIS backend system, and an internal IoT attendance system.',
  },
]

export const educationData = [
  {
    institution: 'Bandung State Polytechnic',
    degree: 'Informatics Engineering',
    period: 'Aug 2021 - Aug 2025',
    details: 'GPA: 3.40 / 4.00. Focus on Backend Development and AI/ML.',
  },
]

export const certifications = [
  {
    name: 'Arutala Junior Backend Spring Boot Developer',
    issuer: 'ArutalaLab',
    year: '2025',
  },
  {
    name: 'JobReady Employability Skills',
    issuer: 'Wadhwani Foundation',
    year: '2024',
  },
]

export const footerLinks = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '#projects' },
  { title: 'Resume', href: '#resume' },
  { title: 'Services', href: '#services' },
  { title: 'Contact', href: '#contact' },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['Id', 'En']
