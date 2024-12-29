'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Course', href: '#' },
  { name: 'Get Started', href: '#' },
]

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="mt-20">
      <header className="bg-white fixed top-0 left-0 w-full border-b-2 border-b-black z-50 shadow-lg">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 ">
          <div className="flex lg:flex-1">
            <span className='text-[1.7em] font-semibold'>Code<span className="text-[#184dee]">Latent</span></span>
          </div>
          <div className="flex lg:hidden ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className=" font-semibold text-xl text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                alt="Logo"
                src="src\assets\code-lint-jpg-logo.jpg"
                className="h-10 rounded-lg w-auto"
              />    
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w h-auto flex flex-col items-centerjustify-around md:flex-row gap-20 mt-20">
          
          <div className="text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
           
          </div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            7 Days Free Coding Bootcamp 
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8 text-justify md:tex-2xl ">
            Dive into the world of coding with our specially designed 7-Day Coding Bootcamp, 
            tailored for absolute beginners. No prior programming experience? No problem!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className='flex items-center justify-center h-auto max-w'>
            <img src="src\assets\Programming-amico.png" alt="" className=' md:w-3/4 md:h-auto h-auto w-auto  ' />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-10rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+1rem)] aspect-[1155/678] w-[28rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+20rem)] sm:w-[48rem]"
          />
        </div>
      </div>
      <div className=" min-h-[70vh] flex justify-center items-center mt-[5vh] pb-[5vh]">
        <div className="mainBox w-full max-width-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl bg-[#9dbdba]  p-6 border rounded-lg shadow-md
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
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Launch
                </a>
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
    </div>
  )
}
