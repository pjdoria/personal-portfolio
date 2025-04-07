
import React from 'react';
import ProjectCard from './ProjectCard';

const javaProjects = [
  {
    title: "E-commerce Backend API",
    description: "A scalable RESTful API for e-commerce platforms built with Spring Boot, featuring product management, user authentication, and order processing.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Java", "Spring Boot", "JPA/Hibernate", "MySQL", "Docker"],
    githubUrl: "https://github.com"
  },
  {
    title: "Banking Microservices",
    description: "A suite of microservices for banking operations, including account management, transactions, and reporting. Implements OAuth2 for security.",
    imageUrl: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Java", "Spring Cloud", "Microservices", "RabbitMQ", "JWT"],
    githubUrl: "https://github.com"
  },
  {
    title: "Employee Management System",
    description: "A full-stack application for employee management with features for time tracking, leave management, and performance reviews.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "Spring Security", "PostgreSQL"],
    liveDemoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Content Management API",
    description: "A headless CMS API that provides content management capabilities for multiple front-end applications with role-based access control.",
    imageUrl: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Java", "Spring Boot", "MongoDB", "AWS S3", "JWT"],
    githubUrl: "https://github.com"
  }
];

const JavaProjectsSection = () => {
  return (
    <section id="java-projects" className="bg-gray-50">
      <div className="container-section">
        <h2 className="section-title text-center text-primary">Java & Spring Boot Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Enterprise-grade applications and APIs built with Java and Spring Boot, focusing on scalability, security, and performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {javaProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              liveDemoUrl={project.liveDemoUrl}
              githubUrl={project.githubUrl}
              isWordPress={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JavaProjectsSection;
