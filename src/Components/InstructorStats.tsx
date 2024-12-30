import React from 'react';
import { Users, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-5 h-5" />,
    value: "1000+",
    label: "Students Taught"
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: "3+",
    label: "Years Experience"
  },
  {
    icon: <Star className="w-5 h-5" />,
    value: "4.9/5",
    label: "Average Rating"
  }
];

export default function InstructorStats() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-black p-4 rounded-lg backdrop-blur-sm
            hover:bg-blue-900 hover:cursor-pointer transition-colors"
        >
          <div className="text-blue-400 mb-2 flex justify-center lg:justify-start">
            {stat.icon}
          </div>
          <div className="text-white font-bold text-xl">{stat.value}</div>
          <div className="text-blue-200 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}