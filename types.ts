import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  companyUrl?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  username: string;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  level: number; // 1-100
}