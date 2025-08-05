import React from 'react';

const services = [
  {
    title: "Web Application Development",
    icon: (
      <svg className="w-10 h-10 text-purple-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M3 8h18" stroke="currentColor" strokeWidth="2"/>
        <circle cx="7" cy="6" r="1" fill="currentColor"/>
        <circle cx="11" cy="6" r="1" fill="currentColor"/>
      </svg>
    ),
    description: "Building robust, scalable, and modern web applications using React, Node.js, and the latest web technologies. I focus on clean code, performance, and seamless user experiences."
  },
  {
    title: "UI/UX Design",
    icon: (
      <svg className="w-10 h-10 text-pink-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M16 3v4" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 3v4" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 11h20" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    description: "Designing intuitive and visually appealing interfaces. I create wireframes, prototypes, and high-fidelity designs that ensure your product is both beautiful and user-friendly."
  },
  {
    title: "API Integration & Backend",
    icon: (
      <svg className="w-10 h-10 text-yellow-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8v8" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    description: "Developing secure and efficient RESTful APIs, integrating third-party services, and managing databases. I ensure your application's backend is reliable and scalable."
  },
  {
    title: "Performance Optimization",
    icon: (
      <svg className="w-10 h-10 text-green-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 12h3M18 12h3M12 3v3M12 18v3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    description: "Analyzing and improving application speed, accessibility, and SEO. I use best practices and modern tools to deliver fast, responsive, and accessible web experiences."
  },
  {
    title: "Consulting & Code Review",
    icon: (
      <svg className="w-10 h-10 text-blue-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 17l4 4 4-4" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 12v9" stroke="currentColor" strokeWidth="2"/>
        <rect x="2" y="3" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    description: "Offering expert advice, code audits, and best practice recommendations. I help teams improve code quality, maintainability, and project architecture."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen w-full pt-40 pb-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-amber-50">My Services</h2>
      <p className="text-lg text-amber-100 mb-10 max-w-2xl text-center">
        As a passionate software developer, I offer a range of services to help you build, launch, and grow your digital products. Whether you need a full-stack web application, a stunning UI, or expert advice, I'm here to help you succeed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-amber-50 mb-2">{service.title}</h3>
            <p className="text-amber-100 text-base">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-bold text-amber-50 mb-2">Ready to work together?</h4>
        <p className="text-amber-100 mb-4">Let's discuss your project and bring your ideas to life!</p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-md shadow-md hover:scale-105 transition-transform"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Services;