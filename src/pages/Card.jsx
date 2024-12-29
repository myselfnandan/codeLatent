import React from "react";

const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Project Building",
      description:
      "Building projects after completing a Data Structures and Algorithms (DSA) course helps solidify your understanding and showcases your problem-solving skills to potential employers.",
      author: "Piyush",
      date: "Launching Soon",
      image: "Team work-cuate.svg",
      disigination: "Course Info",
    },
    {
      id: 2,
      title: "Frontend Development Course",
      description:
        "This course covers the essentials of building modern, responsive websites using HTML, CSS, and JavaScript.and advanced frontend frameworks and libraries like React, Vue.js, and CSS preprocessors like SASS.",
      author:"CodeLatent Team",
      date: "Launching Soon",
      image: "Coding workshop-amico.svg",
      disigination: "Course Info",
    },
    {
      id: 3,
      title: "Backend Development Course",
      description:
        "This course dives into the server-side development of web applications. You'll learn to build APIs, manage databases, and handle server-side logic with backend technologies like Node.js, Python (Django/Flask), Ruby on Rails, or PHP",
      author: "CodeLatent Team",
      date: "Launching Soon",
      image: "Hand coding-bro.svg",
      disigination: "Course Info",
    }
    
  ];

  return (
    <div className="p-4 mb-7">
      <p className="font-bold text-2xl mb-8 text-center mt-7">Upcoming Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-5 ">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                {card.disigination}
              </p>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <div className="flex items-center gap-3">
                <img
                  src="src\assets\code-lint-jpg-logo.jpg"
                  alt={card.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-gray-800 font-medium">{card.author}</p>
                  <p className="text-sm text-gray-500">{card.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
