import React, { useRef, useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function CourseSec() {
  const cardWrapperRef = useRef(null);
  const featureCardsRef = useRef([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Add hover effects to feature cards
    featureCardsRef.current.forEach((card) => {
      const handleMouseEnter = () => (card.style.transform = "translateY(-10px)");
      const handleMouseLeave = () => (card.style.transform = "translateY(0)");

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const handleScroll = (direction) => {
  const cardWrapper = cardWrapperRef.current;
  if (cardWrapper) {
    const scrollAmount = direction === "left" ? -420 : 420;
    cardWrapper.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

      setTimeout(() => {
        cardWrapper.style.transition = "none";
        if (direction === "left") {
          cardWrapper.appendChild(firstCard);
        } else {
          cardWrapper.insertBefore(lastCard, cardWrapper.firstChild);
        }
        cardWrapper.style.transform = "translateX(0)";
      }, 300);
    }
  };

  return (
    <>
      <section className="flex flex-wrap justify-between items-center p-16 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy min-h-[70vh]">
        <div className="flex-1 pr-8">
          <h1 className="mt-20 text-white text-4xl mb-4 font-bold">
            DSA Mastery: Cracking the Code
          </h1>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">
            Master the core concepts of Data Structures and Algorithms (DSA)
            with Java through hands-on learning and interactive problem-solving.
            This course is designed to build a strong foundation in DSA,
            essential for excelling in technical interviews and solving
            real-world coding challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {["Live Sessions", "1:1 Doubt Support", "Regular Assessments"].map(
              (title, index) => (
                <div
                  className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300"
                  key={index}
                  ref={(el) => (featureCardsRef.current[index] = el)}
                >
                  <div className="text-4xl text-indigo-600 mb-4">
                    <i
                      className={`fas ${
                        index === 0
                          ? "fa-video"
                          : index === 1
                          ? "fa-headset"
                          : "fa-tasks"
                      }`}
                    ></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">
                    {index === 0 &&
                      "Interactive live classes with expert instructors."}
                    {index === 1 &&
                      "Round-the-clock assistance to overcome challenges."}
                    {index === 2 && "Periodic evaluations to track your progress."}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="mt-[4rem]">
            <Link to="/form">
            <button className="inline-block px-8 py-4 w-52 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
              Start Now
            </button>
            </Link>
          </div>
        </div>

        <div className="flex-1 text-right">
          <img
            src="hero-image.png"
            alt="Learning Platform Interface"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <div className="px-8 py-16 bg-gray-100">
        <section className="bg-white p-10 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>
          <p className="text-gray-600">
            A comprehensive{" "}
            <strong>Data Structures and Algorithms (DSA)</strong> course in
            Java, taking students from basic programming concepts to advanced
            problem-solving techniques. Enroll now to start your journey
            towards mastering data structures and algorithms, and open the door
            to exciting career opportunities in software development and
            engineering.
          </p>
        </section>

        <section className="relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Course Syllabus
      </h2>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg hover:bg-indigo-600 hover:text-white z-10"
        onClick={() => handleScroll("left")}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg hover:bg-indigo-600 hover:text-white z-10"
        onClick={() => handleScroll("right")}
      >
        &#9654;
      </button>
      <div className="overflow-hidden relative py-6">
       <div
          className="flex gap-12"
          style={{
            overflow: "hidden",
            scrollBehavior: "smooth",
          }}
          ref={cardWrapperRef}
          >
          {[
            {
              title: "Module 1",
              topics: [
                "Basic Java Programming",
                "Arrays & Functions",
                "Time & Space Complexity",
                "2D Arrays",
                "Array list and Switch Case",
                "String,Builder,Buffer",
                "Revision",
              ],
          },
          {
            title: "Module 2",
            topics: ["Recursion", "Quick Sort", "OOPs", "Linked Lists", "Revision"],
          },
          {
            title: "Module 3",
            topics: [
              "Stack and Queues",
              "Hashing and Binary Search",
              "Binary Trees",
              "Revision",
            ],
          },
          {
            title: "Module 4",
            topics: [
              "BST",
              "Prefix Sum and Sliding Window",
              "2-Pointers,Bit Manipulation",
              "Intro to Graphs",
              "Graphs,Greedy Algorithm",
              "Revision",
            ],
          },
          {
            title: "Module 5",
            topics: [
              "Revision",
              "Projects(Android development)",
              "Resume Building",
            ],
          },
        ].map((module, idx) => (
          <div
            className="flex-none bg-white p-6 rounded-lg shadow-md w-72"
            key={idx}
          >
            <div className="bg-indigo-600 text-white p-4 rounded-t-md font-bold">
              {module.title}
            </div>
            <ul className="list-disc pl-6 mt-4">
              {module.topics.map((topic, i) => (
                <li key={i} className="text-gray-700">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
</section>

        <div>
  {/* Support Section */}
  <section className="support-section py-10">
    <h2 className="center-heading text-2xl font-bold text-center mb-8">
      24/7 Doubt Support
    </h2>
    <div className="support-grid grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="feature-card p-6 bg-white shadow-lg rounded-lg text-center">
        <div className="feature-icon text-indigo-600 mb-4">
          <i className="fas fa-headset fa-2x"></i>
        </div>
        <h4 className="text-lg font-semibold mb-2">Always Here to Help</h4>
        <p>Get your doubts resolved anytime</p>
      </div>
      <div className="feature-card p-6 bg-white shadow-lg rounded-lg text-center">
        <div className="feature-icon text-indigo-600 mb-4">
          <i className="fas fa-comment fa-2x"></i>
        </div>
        <h4 className="text-lg font-semibold mb-2">Chat</h4>
        <p>Solve your Doubt by Chat</p>
      </div>
      <div className="feature-card p-6 bg-white shadow-lg rounded-lg text-center">
        <div className="feature-icon text-indigo-600 mb-4">
          <i className="fas fa-video fa-2x"></i>
        </div>
        <h4 className="text-lg font-semibold mb-2">Video Calling</h4>
        <p>Solve your Doubt by Video Calling</p>
      </div>
    </div>
  </section>

  {/* Pricing Section */}
  <section className="pricing py-10">
    <h2 className="text-2xl font-bold text-center mb-8">Pricing</h2>
    <div className="price-card mx-auto p-6 bg-white shadow-lg rounded-lg w-80 text-center">
      <h3 className="text-xl font-bold mb-4">Complete DSA Course</h3>
      <div className="price text-3xl font-bold text-indigo-600 mb-2">₹4,999</div>
      <div className="cut-price text-gray-500 line-through mb-4">₹6,999</div>
      <p className="mb-6">5 months of intensive learning</p>
      <ul className="text-left mb-6">
        <li className="flex items-center mb-2">
          <i className="fa fa-check text-green-500 mr-2"></i>
          <span>Live Interactive Sessions</span>
        </li>
        <li className="flex items-center mb-2">
          <i className="fa fa-check text-green-500 mr-2"></i>
          <span>24/7 Doubt Support</span>
        </li>
        <li className="flex items-center mb-2">
          <i className="fa fa-check text-green-500 mr-2"></i>
          <span>Practice Assignments</span>
        </li>
      </ul>
      <button className="price-button bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
        Enroll Now
      </button>
    </div>
  </section>
</div>

      </div>
    </>
  );
}

export default CourseSec;
