import React from "react";

const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Project Building",
      description:
      ["Guidance - Expert mentors to guide you throughout process",
      "Resources - Access to tools, templates, and learning materials.",
      "Frameworks - Training in popular tech stacks and frameworks.",
      "Collaboration - Opportunities to work with peers in teams.",
      "Support - Continuous feedback and assistance.",
      ],
      list: "87+ students waiting",  
      author: "Piyush",
      date: "Launching Soon",
      image: "Team work-cuate.svg",
      disigination: "Course Info",
    },
    {
      id: 2,
      title: "Frontend Development Course",
      description:
        ["Design - Learn to create visually appealing layouts with HTML CSS.",
        "JavaScript - Add interactivity to your web apps.",
        "Frameworks - Dive into React, Vue.js, or Angular and build responsive designs.",
        "Animations - Enhance user experience with engaging effects.",
        "Optimization - Improve page performance and speed.",
        "Deployment - Host and launch beautiful web apps",
        ],
      list: "129+ students waiting",  
      author:"Code Latent Team",
      date: "Launching Soon",
      image: "Coding workshop-amico.svg",
      disigination: "Course Info",
    },
    {
      id: 3,
      title: "Backend Development Course",
      description:
        [
        "Databases - Manage data with SQL or NoSQL.",
        "Authentication - Implement secure login systems and Learn server-side architecture and hosting.",
        "Languages -Java( A versatile, platform-independent programming language renowned for its robustness, scalability )",
        "Frameworks - Spring Boot( A powerful Java framework that simplifies building production-ready applications by providing pre-configured settings )"],
      list: "197+ students waiting",  
      author: "Code Latent Team",
      date: "Launching Soon",
      image: "Hand coding-bro.svg",
      disigination: "Course Info",
    }
    
  ];

  return (
    <div className="p-4 mb-7">
      <p className="font-bold text-2xl mb-8 text-center mt-7">Upcoming Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-5 sm:mb-7">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-contain bg-gray-100"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                {card.disigination}
              </p>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {card.title}
              </h2>
              <ul className="list-none mb-5">
                {card.description.map((point, index) => (
                  <li key={index} className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 mb-7">
                <img
                  src="people.png"
                  alt={card.list}
                  className="w-4 h-4"
                />
                <div>
                <p className="text-black">{card.list}</p>
                </div>
               </div> 
              <div className="flex items-center gap-3">
                <img
                  src="code-lint-jpg-logo.jpg"
                  alt={card.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-gray-800 font-medium">{card.author}</p>
                  <p className="text-sm text-gray-500">{card.date}</p>
                </div>
                
                <button
                className="absolute bottom-4
                right-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black hover:border-black
                hover:border-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                onClick={() => alert(`You joined the waitlist for ${card.title}!`)}
                >
                Join Waitlist
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
