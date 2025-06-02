import React from 'react';
import { NavigationList } from './nav-list';
import { NavigationProps } from '../../types/navigation';
import Image from 'next/image';

export const DesktopNavigation: React.FC<NavigationProps> = ({ 
  items, 
  currentPath, 
  onItemClick 
}) => {
  return (
    <header className="hidden lg:block bg-[rgb(26,24,24)] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
               <div className="mr-3">
               <Image 
                 src="/assets/images/logo.png" 
                 alt="Beyond Solution Logo" 
                 width={211}
                 height={62}
                 className="object-contain"
                 priority
               />
             </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {items.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick?.(item);
                    }}
                    className={`
                      px-3 py-2 text-sm font-medium transition-colors duration-200
                      ${isActive 
                        ? 'text-white-400' 
                        : 'text-gray-400 hover:text-white'
                      }
                    `}
                  >
                    {item.label}
                    {/* {item.badge && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )} */}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Right side - CTA Button */}
          <div className="hidden md:block">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button (for tablet size) */}
          <div className="md:hidden">
            <button className="bg-gray-800 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};