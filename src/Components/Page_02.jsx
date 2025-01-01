import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLightbulb, FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";

const  Page_02= () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const teamMembers = [
    {
      name: "Nandan R",
      role: "Software Developer",
      bio: "Designer | Problem Solver | Technology Enthusiast",
      expertise: "Expertise: React, Tailwind, Front-End Frame Works, Responsive Designs",
      image: "nandan.png"
    },
    {
      name: "Nirma Sahani",
      role: "Social Media Manager",
      bio: "Brand Strategist | Digital Storyteller",
      expertise: "Expertise: Social Media Handling, Marketing Skills, Design",
      image: "nirma.png"
    },
    {
      name: "Rahul",
      role: "Front-End Devloper",
      bio: "UI/UX Enthusiast | Code and Design Advocate",
      expertise: "Expertise: Typescript, React, Database, Front-End Tools",
      image: "rahul.png"
    },
    {
      name: "Amaan Ali",
      role: "Full Stack Developer",
      bio: "End-to-End Solution Expert",
      expertise: "Expertise: Java, Es6, Database, React, Frameworks",
      image: "amaan.png"
    },
    {
      name: "Tanweer Raza",
      role: "Curriculum Designer",
      bio: "Educator | Learning Experience Innovator",
      expertise: "Expertise: Modules, Plans, Units, Sessions",
      image: "tanweer.png"
    },
    
    {
      name: "Gayathri",
      role: "Student Success Coach",
      bio: "Empowering Learners to Reach Their Potential",
      expertise: "Expertise: DSA, Career Planning, Academic Support",
      image: "gayathri.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">  

      {/* Team Section */}
      <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">
        Technical Team
      </h2>
      </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover object-center w-full h-full max-w-[300px] max-h-[300px] mx-auto transition-transform hover:scale-110 duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 mb-1">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
                <p className="text-gray-600">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence in Education</h3>
              <p className="text-gray-600">Committed to providing top-tier learning experiences</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <FaLightbulb className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies and teaching methods</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <FaHandsHelping className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Providing continuous guidance and mentorship</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <FaChalkboardTeacher className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Learning</h3>
              <p className="text-gray-600">Focus on real-world applications and projects</p>
            </motion.div>
          </div>
        </div>
      </section>

     </div>
  );
};

export default Page_02;