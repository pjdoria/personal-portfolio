
import React from 'react';
import SocialLinks from './SocialLinks';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-[rgba(26,26,26,1)] text-white">
      <div className="container-section flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Professional Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            Peter Doria Herrera
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
            Back-End Developer
          </h2>
          
          <p className="text-lg text-gray-300 mb-6">
            Experienced back-end developer with expertise in Java/Spring Boot and WordPress. 
            I specialize in building robust, scalable, and secure server-side applications 
            that power modern web experiences. With a strong focus on code quality and 
            performance optimization, I deliver solutions that meet business needs while 
            maintaining technical excellence.
          </p>
          
          <div className="mb-6">
            <SocialLinks />
          </div>
          
          <Button className="flex items-center gap-2">
            <Mail size={18} />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
