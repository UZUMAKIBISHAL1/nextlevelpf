'use client';
import Navbar from '../components/Navbar';



export default function Features() {
  const techFeatures = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l9 7-4 9-5-3-5 3-4-9 9-7z" />
        </svg>
      ),
      title: 'Innovative Solutions',
      description:
        'Building creative and scalable solutions that solve real-world problems with elegant code.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="8" />
        </svg>
      ),
      title: 'Performance Focused',
      description:
        'Optimizing apps for speed and smooth user experience across all devices and platforms.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
        </svg>
      ),
      title: 'Clean & Modern UI',
      description:
        'Crafting user interfaces that are intuitive, accessible, and visually stunning.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      ),
      title: 'Continuous Learning',
      description:
        'Keeping up with the latest tech trends and always improving my craft.',
    },
  ];

  const academicFeatures = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.562c0 2.485-2.015 4.5-4.5 4.5S10 17.625 10 15.14c0-1.33.54-2.63 1.42-3.62z" />
          <path d="M12 14v7" />
        </svg>
      ),
      title: 'Academic Excellence',
      description: 'I completed my +2 from Sai Global College of Tech with a idea of building a career in tech.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14.31 8l5.74 9.94" />
          <path d="M9.69 8h11.48" />
          <path d="M7.38 12l2.31 4" />
          <path d="M9.69 16h11.48" />
        </svg>
      ),
      title: 'Research Skills',
      description: 'Our team has completed various research projects, enhancing our tech and analytical skills.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M16 21v-2a4 4 0 00-8 0v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: 'Team Collaboration',
      description:
        'If you have doubt about our team , this website is the result of our collaboration efforts.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 10h-6" />
          <path d="M3 6h18" />
          <path d="M3 14h6" />
          <path d="M9 18h12" />
        </svg>
      ),
      title: 'Time Management',
      description:
        'we focus on delivering qualitaiv products on time and as the requirement.',
    },
  ];

  return (
    <main>
      <Navbar />
    
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
         As a Tech Student 
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-indigo-300">
          I have good command over frontend and backend technologies too so i am capable and fit for working in any company.
          I have build various projects using simple languages like HTML , CSS and JS whereas i have good command over AI tools , I have worked
          in backend too using modern languages like node and python , i have good command over frameworks like NEXT.JS and REACT.JS. I have also
          build backend CRUD features , simple RESTFUL API's using Django. I have good foundation in building algo's and combining things for 
          building scalable and capable products.I focus on building websites using qualitative designs so i am good at designs and i have 
          experience of around 1 year of using Figma too. I think i can add value to your company with my expertise.
        </p>
      </div>

      {/* Tech features - grid of 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto mb-20">
        {techFeatures.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-2xl p-8 shadow-lg hover:shadow-purple-600 transition-shadow duration-300 cursor-default"
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-indigo-300">{description}</p>
          </div>
        ))}
      </div>

      {/* Academics features - grid of 4 below */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-bold mb-6 text-purple-400">Academic Highlights</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {academicFeatures.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-2xl p-8 shadow-lg hover:shadow-green-500 transition-shadow duration-300 cursor-default"
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-green-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}
