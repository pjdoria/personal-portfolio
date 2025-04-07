
import React from 'react';
import ProjectCard from './ProjectCard';

const wordpressProjects = [
  {
    title: "Luxury Resort Website",
    description: "A custom WordPress website for a luxury resort with booking integration, gallery, and custom post types for rooms and amenities.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
    liveDemoUrl: "https://example.com"
  },
  {
    title: "E-commerce Fashion Store",
    description: "A WooCommerce-powered fashion store with custom product catalog, payment gateway integration, and responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["WordPress", "WooCommerce", "Custom Plugins", "Payment Gateway"],
    liveDemoUrl: "https://example.com"
  },
  {
    title: "Corporate Business Website",
    description: "A professional business website with custom post types for services, team members, and testimonials. Includes contact form integration.",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    technologies: ["WordPress", "ACF Pro", "Custom Theme", "Contact Form 7"],
    liveDemoUrl: "https://example.com"
  }
];

const WordPressSection = () => {
  return (
    <section id="wordpress-projects" className="bg-white">
      <div className="container-section">
        <h2 className="section-title text-center">WordPress Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Custom WordPress solutions built for various business needs, featuring unique designs and functionality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wordpressProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              liveDemoUrl={project.liveDemoUrl}
              isWordPress={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordPressSection;
