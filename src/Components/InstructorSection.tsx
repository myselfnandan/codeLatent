import React from 'react';
import { Github, Linkedin, Mail, Star } from 'lucide-react';
import InstructorStats from './InstructorStats';
import SocialLink from './SocialLink';

export default function InstructorSection() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          <span className="text-transparent bg-clip-text bg-black">
            Meet Your Instructor
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFQ220i3H_Qzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683356816760?e=1740614400&v=beta&t=TUp_P1tdgvDlvhc4pUAc0hAKwi8o8Aw6Z_Y_dATVHOA"
              alt="Piyush"
              className="relative w-72 h-72 object-cover rounded-xl"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-black mb-2">Piyush Choudhary</h3>
            <p className="text-black mb-4">Software Engineer @Top Leading Bank</p>
            <p className="text-black mb-6">
              With 3+ years of experience in software development and a passion for teaching,
              Piyush has helped over 100+ students master DSA concepts and ace their technical interviews.
            </p>

            <InstructorStats />

            <div className="flex gap-4 justify-center lg:justify-start mt-6">
              {/* <SocialLink href="#" icon={<Github />} label="GitHub" /> */}
              <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="#" icon={<Mail />} label="Email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}