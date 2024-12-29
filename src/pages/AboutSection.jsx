import React from 'react';

const reasons = [
  {
    id: 1,
    title: 'Expert Mentorship',
    description:
      'Learn from experienced professionals who bring real-world insights to every session. Our mentors are industry leaders committed to your success.',
    image: 'expert.svg',
  },
  {
    id: 2,
    title: 'Hands-On Projects',
    description:
      'Work on real-world projects that mirror industry challenges. Gain practical experience and build a portfolio that showcases your skills.',
    image: 'social.svg',
  },
  {
    id: 3,
    title: 'Career Support',
    description:
      'Our career coaches provide resume building, mock interviews, and job placement assistance to help you land your dream job.',
    image: 'career.svg', 
  },
  {
    id: 4,
    title: 'Community Support',
    description:
      'Join a vibrant community of learners and alumni. Collaborate, network, and grow together in a supportive environment.',
    image: 'community.svg', 
  },
  {
    id: 5,
    title: 'Affordable and Flexible',
    description:
      'We offer affordable pricing and flexible schedules to make high-quality education accessible to everyone.',
    image: 'affordable.svg', 
  },
];

const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Choose CodeLatent?</h2>
        <div className="space-y-12">
          {reasons.map(({ id, title, description, image }, index) => (
            <div
              key={id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-4">{description}</p>
              </div>
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg shadow-lg w-full h-64 object-contain bg-gray-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
