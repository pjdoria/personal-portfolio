
import React from 'react';
import CertificationCard from './CertificationCard';

const certifications = [
  {
    title: "Java Developer Certification",
    issuer: "Oracle",
    date: "Jan 2023",
    credentialId: "OC1234567",
    skills: ["Java", "OOP", "Data Structures"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Oracle_Logo.svg/2560px-Oracle_Logo.svg.png"
  },
  {
    title: "Spring Boot Developer",
    issuer: "VMware",
    date: "Mar 2022",
    credentialId: "SB9876543",
    skills: ["Spring Boot", "Microservices", "REST APIs"],
    imageUrl: "https://spring.io/img/spring-2.svg"
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "Nov 2022",
    credentialId: "AWS0123456",
    skills: ["AWS", "Cloud Computing", "Serverless"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
  },
  {
    title: "WordPress Developer",
    issuer: "Automattic",
    date: "Jun 2021",
    credentialId: "WP7654321",
    skills: ["WordPress", "PHP", "Theme Development"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="bg-gray-50">
      <div className="container-section">
        <h2 className="section-title text-center text-primary">Professional Certifications</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          My commitment to continuous learning and professional development is reflected in these industry-recognized certifications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              credentialId={cert.credentialId}
              skills={cert.skills}
              imageUrl={cert.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
