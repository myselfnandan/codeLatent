'use client'

import Page_02 from '../../Components/Page_02.jsx';
import Page_03 from '../../Components/Page_03.jsx';
import CodeHeader from '../../Components/CodeHeader.jsx';



export default function About() {
  
  return (
    <div className="inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy">
        <CodeHeader/>
        <div className="mx-auto max-w h-auto flex flex-col items-centerjustify-around md:flex-row gap-10 pt-10 pl-2 pr-2 md:ml-20 md:pt-20 mt-[5rem]">
          
          <div className="text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
           
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4 animate-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Piyush Choudhary
            </span>
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-200">
            Technical Architect & Founder</p>
            <p className="mt-4 text-pretty text-lg font-medium sm:text-xl/8 text-justify md:tex-2xl text-blue-200 mb-8 max-w-2xl animate-fade-in">
            A skilled Software Engineer at a leading investment bank, specializing in backend development and data structures & algorithms (DSA). As a passionate instructor with 3 years of experience, who have trained aspiring developers in backend technologies and DSA, focusing on clean code and interview preparation. Proficient in Java, SpringBoot, and cloud platforms like AWS, Who is a collaborative problem solver and mentor.
            </p>

          </div>
          <div className='flex items-center justify-center h-auto max-w-2xl text-blue-200 lg:w-3xl lg:pl-20'>
            <img src="Piyush.png" alt="" className=' md:w-[600p3x] md:h-[500px] h-auto w-auto ' />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-10rem)]"
        >
        </div>
        <Page_03/>
        <Page_02/>
    </div>
    
  )
}
