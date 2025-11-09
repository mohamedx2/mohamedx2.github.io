export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Ali Hamroun",
    "jobTitle": "Full Stack Developer",
    "description": "22-year-old full-stack developer with 2 years of experience and 10+ completed projects. Specializing in React, Next.js, Node.js, and full-stack development.",
    "url": "https://www.mohamedalihamroun.me",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.mohamedalihamroun.me/profile.jpg",
      "width": 1200,
      "height": 1200
    },
    "sameAs": [
      "https://github.com/mohamedx2",
      "https://linkedin.com/in/mohamedx2"
    ],
    "knowsAbout": [
      "Full Stack Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Web Development",
      "Software Development",
      "Frontend Development",
      "Backend Development"
    ],
    "yearsOfExperience": 2,
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}