
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  imageUrl: string;
}

const CertificationCard = ({
  title,
  issuer,
  date,
  credentialId,
  skills,
  imageUrl
}: CertificationCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="w-16 h-16 flex-shrink-0 bg-gray-100 p-2 rounded-md">
            <img 
              src={imageUrl} 
              alt={issuer} 
              className="w-full h-full object-contain"
            />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-3">
          <p className="text-lg font-medium">{issuer}</p>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          {credentialId && (
            <p className="text-xs text-gray-500 mt-1">
              Credential ID: {credentialId}
            </p>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
