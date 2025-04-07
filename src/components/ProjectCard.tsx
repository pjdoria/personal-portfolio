
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  isWordPress?: boolean;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
  liveDemoUrl,
  githubUrl,
  isWordPress = false
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {isWordPress && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              WordPress
            </Badge>
          )}
          {!isWordPress && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Java / Spring Boot
            </Badge>
          )}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-3">
        {liveDemoUrl && (
          <Button variant="outline" size="sm" asChild>
            <a 
              href={liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          </Button>
        )}
        
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github size={14} />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
