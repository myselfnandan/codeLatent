import React from 'react';
import { BookOpen, GitBranch, Database, Network, Cpu, Brain, Award } from 'lucide-react';

const days = [
  {
    day: 1,
    icon: <BookOpen className="w-6 h-6" />,
    title: "Intro to JAVA",
    topics: ["JAVA", "JDK", "IDE"]
  },
  {
    day: 2,
    icon: <GitBranch className="w-6 h-6" />,
    title: "Variable and Data Types",
    topics: ["Variables", "Primitive Data Type", "Abstract Data Type"]
  },
  {
    day: 3,
    icon: <Database className="w-6 h-6" />,
    title: "Loops and Conditions",
    topics: ["for,while and do while ", "if else", "else if"]
  },
  {
    day: 4,
    icon: <Network className="w-6 h-6" />,
    title: "Arrays",
    topics: ["Single Dimensional Array", "Basic Operation", "Hands-on"]
  },
  {
    day: 5,
    icon: <Cpu className="w-6 h-6" />,
    title: "String in Java",
    topics: ["Basics of Strings", "Common String Operation", "Hands-on"]
  },
  {
    day: 6,
    icon: <Brain className="w-6 h-6" />,
    title: "Operators and Expression",
    topics: ["Arithmetic,relational,logical operators", "Operator precedence", "Hands-on"]
  },
  {
    day: 7,
    icon: <Award className="w-6 h-6" />,
    title: "Practice and Wrap-ups",
    topics: ["Revision and recap", "Final Hands-on", "Q&A session"]
  }
];

export default function Curriculum() {
  return (
    <div className="bg-white py-7">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="text-transparent bg-clip-text bg-black">
            7-Day Journey to DSA Mastery
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.map((day, index) => (
            <div
              key={index}
              className="relative group bg-black
                p-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-xl"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    {day.icon}
                  </div>
                  <div>
                    <span className="text-blue-400 font-semibold">Day {day.day}</span>
                    <h3 className="text-xl font-bold text-white">{day.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {day.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-blue-200 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}