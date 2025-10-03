export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Ali Hamroun",
    "jobTitle": "Full Stack Developer",
    "description": "22-year-old full-stack developer passionate about creating innovative solutions.",
    "url": "https://www.mohamedalihamroun.me",
    "image": "https://www.mohamedalihamroun.me/profile.jpg",
    "sameAs": [
      "https://github.com/mohamedx2",
      "https://linkedin.com/in/mohamedx2"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript", 
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Web Development",
      "Software Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}