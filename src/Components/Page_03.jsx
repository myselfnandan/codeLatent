import React, { useEffect } from "react";
import { FaGraduationCap, FaCode, FaChalkboardTeacher, FaRocket, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

const Page_03 = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Team Members Data
  const teamMembers = [
    
    {
      name: "Shubham Rai",
      position: "Senior Software Developer",
      bio: "Full-stack developer with expertise in modern frameworks",
      image: "shubham.png",
      linkedin: "https://www.linkedin.com/in/shubham-rai-9a6a84204/",
    },
    
    {
      name: "Richa Pallavi",
      position: "Marketing Head",
      bio: "Strategic professional specializing in understanding market trends",
      image: "Richa.png",
      linkedin: "https://www.linkedin.com/in/richa-pallavi-43ab60200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  // Services Data
  const services = [
    { icon: <FaGraduationCap />, title: "Structured Learning" },
    { icon: <FaCode />, title: "Hands-on Coding" },
    { icon: <FaChalkboardTeacher />, title: "Expert Mentorship" },
    { icon: <FaRocket />, title: "Career Growth" },
  ];

  return (
    <div className="bg-white">
  {/* Team Section */}
  <section className="py-16 px-4 md:px-8 bg-gray-100 pb-0 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="h-[20em] sm:h-[22em] md:h-[25em] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover object-center w-full h-full max-w-[300px] max-h-[300px] mx-auto" // **Changes: Added max-width and max-height**
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.position}</p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{member.bio}</p>
              <a
                href={member.linkedin}
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>


  );
};
export default Page_03;