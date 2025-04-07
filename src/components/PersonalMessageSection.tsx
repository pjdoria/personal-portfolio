
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const PersonalMessageSection = () => {
  return (
    <section id="personal-message" className="bg-gradient-to-b from-white to-blue-50">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Let's Build Something Amazing Together</h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  My passion is creating elegant solutions to complex problems. I believe that great software is not just about code—it's about understanding the unique challenges each project presents and crafting tailored solutions that exceed expectations.
                </p>
                
                <p className="text-lg text-gray-600 mb-6">
                  Whether you need a robust backend system, a custom WordPress implementation, or anything in between, I'm committed to delivering high-quality work that stands the test of time.
                </p>
                
                <p className="text-lg font-medium text-gray-800 mb-8">
                  I'd love to discuss how we can work together to bring your ideas to life!
                </p>
                
                <Button className="flex items-center gap-2">
                  <Mail size={18} />
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Workspace" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalMessageSection;
