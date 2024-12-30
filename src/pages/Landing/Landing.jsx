'use client'

import { useState } from 'react'
import Card from "../../Components/Card.jsx";
import Testimonials from "../../Components/Testimonials.jsx";
import { Link } from "react-router-dom";
import CardCode from '../../Components/Card-2.jsx';
import CodeHeader from '../../Components/CodeHeader.jsx';

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    
    <div className="inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy md:mt-10">
      <CodeHeader/>

      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w h-auto flex flex-col items-centerjustify-around md:flex-row gap-20 mt-20">
          
          <div className="text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
           
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 animate-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              7-Day Free DSA Bootcamp
            </span>
          </h1>
            <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8 text-justify md:tex-2xl text-blue-200 mb-8 max-w-2xl animate-fade-in">
            Dive into the world of coding with our specially designed 7-Day Coding Bootcamp, 
            tailored for absolute beginners. No prior programming experience? No problem!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/bootcamp"
                className="group px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 animate-pulse flex items-center space-x-2"
              >
                Get started
              </Link>
              <Link to="/bootcamp" className="text-sm/6 font-semibold text-blue-200">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center h-auto max-w-2xl text-blue-200'>
            <img src="Programming-amico.png" alt="" className=' md:w-3/4 md:h-auto h-auto w-auto  ' />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-10rem)]"
        >
        </div>
      </div>
      <div className=" min-h-[70vh] flex bg-white mt-[5vh] pt-[5vh] justify-center items-center pb-[5vh]">
        <div className="mainBox w-full max-width-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl p-6 border rounded-lg shadow-md
        cursor-pointer transform transition-all duration-300 hover:scale-105">
          <p className="font-bold text-xl sm:text-lg md:text-2xl mb-7 text-center border-b-black border-b-2 pb-3">Our Courses</p>
          <div className="overflow-hidden flex flex-col md:flex-row">
            {/* TextBox */}
            <div className="TextBox p-6 flex-1">
              <h3 className="font-bold text-lg mb-2 text-black">DSA Mastery: Cracking the Code</h3>
              <p className="text-base text-gray-700 mb-4 text-base sm:text-xs md:text-base">
                Master the core concepts of Data Structures and Algorithms (DSA) through hands-on learning and interactive problem-solving.
                This bootcamp is designed to build a strong foundation in DSA, essential for excelling in technical interviews and solving real-world coding challenges.
                With expert-led sessions, live coding exercises, and algorithmic problem sets, you'll learn to write efficient, scalable, and optimized code.
              </p>

              <div className="mt-6 flex items-center justify-center gap-x-6">
                <Link
                  to="/course"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Launch
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 p-6">
              <img 
                id="CourseImg" 
                src="team.svg" 
                alt="Course Image" 
                className="w-full h-auto object-cover rounded-lg" 
              />
            </div>
          </div>
        </div>
      </div>
      <Card/>
      <CardCode/>
      <Testimonials/>
    </div>
  );
};