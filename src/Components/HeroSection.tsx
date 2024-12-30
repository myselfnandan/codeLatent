import React from 'react';
import { Code2, Brain, Cpu, Timer, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden pb-10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="relative container mx-auto px-4 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="animate-float">
            <Code2 className="w-20 h-20 text-blue-400 mb-6" />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 animate-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              7-Day Free DSA Bootcamp
            </span>
          </h1>
          
          <p className="text-xl text-blue-200 mb-8 max-w-2xl animate-fade-in">
            Master Data Structures & Algorithms with Java in an intensive, hands-on bootcamp designed for future tech leaders.
          </p>

          <Link to="/form" ><button className="group px-8 py-4 bg-blue-600 text-white rounded-full font-semibold 
            hover:bg-blue-700 transition-all duration-300 animate-pulse flex items-center space-x-2">
            <span>Enroll Now</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button></Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Structured Learning",
                description: "Progressive curriculum from basics to advanced concepts"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Hands-on Practice",
                description: "Real-world coding challenges and problem-solving"
              },
              {
                icon: <Timer className="w-8 h-8" />,
                title: "Daily Progress",
                description: "Intensive training with measurable improvements"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl 
                hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}