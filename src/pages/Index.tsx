
import React from 'react';
import HeroSection from '@/components/HeroSection';
import CertificationsSection from '@/components/CertificationsSection';
import WordPressSection from '@/components/WordPressSection';
import JavaProjectsSection from '@/components/JavaProjectsSection';
import PersonalMessageSection from '@/components/PersonalMessageSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CertificationsSection />
      <WordPressSection />
      <JavaProjectsSection />
      <PersonalMessageSection />
    </main>
  );
};

export default Index;
