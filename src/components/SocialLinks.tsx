
import React from 'react';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-colors hover:text-primary"
      >
        <Button variant="outline" size="icon">
          <Github size={20} />
        </Button>
      </a>
      
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-colors hover:text-primary"
      >
        <Button variant="outline" size="icon">
          <Linkedin size={20} />
        </Button>
      </a>
      
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-colors hover:text-primary"
      >
        <Button variant="outline" size="icon">
          <Twitter size={20} />
        </Button>
      </a>
      
      <a 
        href="https://yourwebsite.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-colors hover:text-primary"
      >
        <Button variant="outline" size="icon">
          <Globe size={20} />
        </Button>
      </a>
    </div>
  );
};

export default SocialLinks;
