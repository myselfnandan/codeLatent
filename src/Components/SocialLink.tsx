import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-black rounded-full flex items-center justify-center
        text-blue-400 hover:bg-blue-800/50 hover:text-blue-300 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}