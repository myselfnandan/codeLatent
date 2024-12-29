import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Anil K.',
    role: 'Full-Stack Developer',
    text: 'This bootcamp exceeded all my expectations! The instructors were knowledgeable, patient, and truly invested in our success. I landed my first job in tech within two months of completing the program. Highly recommend it to anyone looking to upskill!',
    image: 'user.png',
  },
  {
    id: 2,
    name: 'Deepak Kumar N.',
    role: 'Software Engineer',
    text: 'I came into the bootcamp with zero coding experience, and now I’m building real-world applications. The hands-on projects and career coaching were invaluable. The support system here is incredible!',
    image: 'user.png',
  },
  {
    id: 3,
    name: 'Sudeep S.',
    role: 'DSA Mentor',
    text: 'What stood out to me was the focus on practical skills and industry standards. The program prepared me for both technical challenges and workplace dynamics. Thanks to this bootcamp, I’m now part of an amazing team at a top company.',
    image: 'user.png',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12">
      <p>Privacy Policy</p>
      <div className="w-full mx-auto px-10 lg:px-20">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6 mt-8">What Our Graduates Say</h2>
        <div className="grid grid-wrap justify-center gap-8">
          {testimonials.map(({ id, name, role, text, image }) => (
            <div
              key={id}
              className="flex flex-col bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
              <p className="text-gray-600 overflow-hidden">"{text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
