'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, User, Briefcase, BookOpen, MessageSquare, Star, Linkedin, Twitter, Globe, Mail } from 'lucide-react';
import { Builder as BaseBuilder } from '@/data/builders';
import { ReactNode } from 'react';
import NeoPopButton from '@/components/ui/NeoPopButton';

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description?: string;
};

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

type SocialLink = {
  platform: string;
  url: string;
  icon: React.ReactNode;
};

type Builder = {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  expertise: string[];
  socialLinks: SocialLink[];
};

interface EnhancedBuilder extends Omit<BaseBuilder, 'tags'> {
  bio: string;
  experience: Array<{
    role: string;
    company: string;
    duration: string;
    description?: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  expertise: string[];
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: ReactNode;
  }>;
}

interface BuilderClientProps {
  builder: BaseBuilder;
}

export default function BuilderClient({ builder }: BuilderClientProps) {
  const router = useRouter();
  
  // Generate a consistent color based on builder ID
  const builderColor = `hsl(${parseInt(builder.id || '0', 36) % 360}, 80%, 60%)`;
  
  // Enhance builder data with additional details
  // First, create a base enhanced builder without the email in socialLinks
  const baseEnhancedBuilder: Omit<EnhancedBuilder, 'socialLinks'> & { socialLinks?: any[] } = {
    ...builder,
    bio: builder.bio || builder.description || 'Passionate builder with extensive experience in the field.',
    experience: builder.experience || [
      {
        role: builder.role,
        company: builder.company,
        duration: '2020 - Present',
        description: 'Leading innovative projects and building impactful solutions.'
      },
      {
        role: 'Senior Developer',
        company: 'Tech Corp',
        duration: '2018 - 2020',
        description: 'Developed and maintained critical systems.'
      }
    ],
    education: builder.education || [
      {
        degree: 'Masters in Computer Science',
        institution: 'Tech University',
        year: '2018'
      },
      {
        degree: 'Bachelors in Engineering',
        institution: 'State University',
        year: '2016'
      }
    ],
    expertise: builder.expertise || (() => {
      if (Array.isArray(builder.tags)) return builder.tags;
      if (typeof builder.tags === 'string') return builder.tags.split(',').map(tag => tag.trim());
      return ['Web Development', 'Blockchain', 'UI/UX'];
    })()
  };

  // Now create the final enhanced builder with the email from the base
  const enhancedBuilder: EnhancedBuilder = {
    ...baseEnhancedBuilder,
    socialLinks: [
      ...(builder.linkedin ? [{
        platform: 'LinkedIn',
        url: builder.linkedin.startsWith('http') ? builder.linkedin : `https://linkedin.com/in/${builder.linkedin}`,
        icon: <Linkedin className="w-4 h-4" />
      }] : []),
      ...(builder.twitter ? [{
        platform: 'Twitter',
        url: builder.twitter.startsWith('http') ? builder.twitter : `https://twitter.com/${builder.twitter}`,
        icon: <Twitter className="w-4 h-4" />
      }] : []),
      ...(builder.website ? [{
        platform: 'Website',
        url: builder.website.startsWith('http') ? builder.website : `https://${builder.website}`,
        icon: <Globe className="w-4 h-4" />
      }] : []),
      {
        platform: 'Email',
        url: `mailto:${'email' in builder ? builder.email : 'contact@example.com'}`,
        icon: <Mail className="w-4 h-4" />
      }
    ].filter(Boolean) as SocialLink[]
  };

  // Ensure all arrays are defined before rendering
  const safeExperience = enhancedBuilder.experience || [];
  const safeEducation = enhancedBuilder.education || [];
  const safeExpertise = enhancedBuilder.expertise || [];
  const safeSocialLinks = enhancedBuilder.socialLinks || [];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back button */}
      <div className="container mx-auto px-4 py-8">
        <NeoPopButton
          as="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Builders
        </NeoPopButton>
      </div>

      {/* Builder Profile */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800">
            {/* Profile Header */}
            <div className="relative h-64 bg-gradient-to-br from-gray-900 to-black">
              <div className="absolute inset-0 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={enhancedBuilder.image || '/images/placeholder-avatar.jpg'}
                    alt={enhancedBuilder.name}
                    fill
                    className="object-cover opacity-20"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="relative h-full flex items-center p-8">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-8 w-full">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-yellow-400/50 shadow-lg">
                    <Image
                      src={enhancedBuilder.image || '/images/placeholder-avatar.jpg'}
                      alt={enhancedBuilder.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 10rem, 12rem"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLDivElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white"
                      style={{ 
                        backgroundColor: builderColor,
                        display: 'none' // Will be shown if image fails to load
                      }}
                    >
                      {enhancedBuilder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{enhancedBuilder.name}</h1>
                    <p className="text-yellow-400 text-xl mb-1">{enhancedBuilder.role}</p>
                    <p className="text-gray-300">{enhancedBuilder.company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - About & Social */}
                <div className="lg:col-span-2 space-y-8">
                  {/* About Section */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2 text-yellow-400" />
                      About
                    </h2>
                    <p className="text-gray-300">{enhancedBuilder.bio}</p>
                  </div>

                  {/* Experience Section */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-yellow-400" />
                      Experience
                    </h2>
                    <div className="space-y-6">
                      {safeExperience.map((exp: ExperienceItem, index: number) => (
                        <div key={index} className="relative pl-6 pb-6 border-l-2 border-yellow-400/20 last:border-transparent last:pb-0">
                          <div className="absolute left-0 w-3 h-3 rounded-full bg-yellow-400 -left-[7px] top-2"></div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">{exp.role}</h3>
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-400 text-black">
                              {exp.company}
                            </span>
                            {exp.duration && (
                              <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-black">
                                {exp.duration}
                              </span>
                            )}
                          </div>
                          {exp.description && (
                            <p className="text-gray-300 text-sm mt-2 pl-2 border-l-2 border-yellow-400/30">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education Section */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-yellow-400" />
                      Education
                    </h2>
                    <div className="space-y-6">
                      {safeEducation.map((edu: EducationItem, index: number) => (
                        <div key={index} className="relative pl-6 pb-6 border-l-2 border-yellow-400/20 last:border-transparent last:pb-0">
                          <div className="absolute left-0 w-3 h-3 rounded-full bg-yellow-400 -left-[7px] top-2"></div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">{edu.degree}</h3>
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-400 text-black">
                              {edu.institution}
                            </span>
                            {edu.year && (
                              <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-black">
                                {edu.year}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  {/* Contact Card */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2 text-yellow-400" />
                      Contact
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {safeSocialLinks.map((link: SocialLink, index: number) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                          <span className="w-8 h-8 flex items-center justify-center bg-gray-700/50 rounded-full mr-3">
                            {link.icon}
                          </span>
                          <span>{link.platform}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-400" />
                      Expertise
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {safeExpertise.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{
                            backgroundColor: `${builderColor}`,
                            border: '1px solid rgba(234, 179, 8, 0.3)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expertise */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    Expertise
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {safeExpertise.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{
                          backgroundColor: `${builderColor}`,
                          border: '1px solid rgba(234, 179, 8, 0.3)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="lg:col-span-2 mt-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Frequently Asked <span className="text-yellow-400">Questions</span>
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        question: "How can I connect with this builder?",
                        answer: "You can connect with this builder by clicking the 'Connect' button below. This will take you to their preferred contact method where you can reach out directly."
                      },
                      {
                        question: "What kind of projects is this builder interested in?",
                        answer: "Our builders are typically interested in innovative projects that align with their expertise. Review their experience and skills to see if your project might be a good fit."
                      },
                      {
                        question: "How are builders selected for The Builders Club?",
                        answer: "Builders are carefully vetted based on their experience, expertise, and contributions to the tech community. We look for individuals who are passionate about building and sharing knowledge."
                      },
                      {
                        question: "Can I become a featured builder?",
                        answer: "Yes! We're always looking for talented builders to feature. If you're interested in joining our community, please reach out to us through our contact page."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border-b border-gray-800 pb-4">
                        <button
                          className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                          onClick={() => {
                            const element = document.getElementById(`builder-faq-${index}`);
                            if (element) {
                              element.classList.toggle('max-h-0');
                              element.classList.toggle('max-h-40');
                            }
                          }}
                        >
                          <h3 className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">
                            {faq.question}
                          </h3>
                          <svg 
                            className="w-5 h-5 text-yellow-400 transform transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div 
                          id={`builder-faq-${index}`}
                          className="overflow-hidden transition-all duration-300 max-h-0"
                        >
                          <p className="text-gray-300 pb-4">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join Circle Button */}
                <NeoPopButton
                  as="link"
                  href="/circle"
                  className="w-full justify-center mt-6 bg-yellow-400 text-black hover:bg-yellow-300 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Join the Circle
                </NeoPopButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
