export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Ali Hamroun",
    "alternateName": "mohamedx2",
    "jobTitle": "Full-Stack Developer & Systems Engineer",
    "description": "Full-stack developer and systems engineer specializing in framework engineering, AI automation, and low-level systems. Creator of Baraqex, DBGO, and multiple open-source projects.",
    "url": "https://www.mohamedalihamroun.me",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.mohamedalihamroun.me/profile.jpg",
      "width": 1200,
      "height": 1200
    },
    "sameAs": [
      "https://github.com/mohamedx2",
      "https://www.linkedin.com/in/mohamed-ali-hamroun-486573314/",
      "https://npmjs.com/baraqex",
      "https://baraqex.tech"
    ],
    "knowsAbout": [
      "Full-Stack Development",
      "Systems Engineering",
      "JavaScript",
      "TypeScript",
      "Go",
      "React",
      "Next.js",
      "Framework Engineering",
      "LSM Trees",
      "AI Agents",
      "WebAssembly",
      "Server-Side Rendering",
      "Real-Time Collaboration",
      "Open Source"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "AWS Academy Graduate — Cloud Foundations",
        "url": "https://www.credly.com/badges/b4fbc187-cb9e-4278-9e51-a32a38c8bec6/"
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "EPI — École Polytechnique Internationale Privée de Sousse",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sousse",
          "addressCountry": "TN"
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "Higher Institute of Computer Science",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mahdia",
          "addressCountry": "TN"
        }
      }
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "GDG On Campus EPI",
      "description": "Google Developer Group On Campus — Core Team Member"
    },
    "nationality": {
      "@type": "Country",
      "name": "Tunisia"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
