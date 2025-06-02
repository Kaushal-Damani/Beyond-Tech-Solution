import React from 'react';
import { MobileNavigation } from './nav/mobile';
import { NavigationProps } from './types/navigation';

interface HeaderProps extends NavigationProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  items, 
  currentPath, 
  onItemClick,
  className = '' 
}) => {
  return (
    <header className={`lg:hidden bg-[rgb(26,24,24)] text-white border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 ${className}`}>
      <div className="flex items-center justify-between h-16 px-4">
        {/* Brand/Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Your Brand
          </h1>
        </div>

        {/* Right side items (notifications, profile, etc.) */}
        <div className="flex items-center space-x-2">
          {/* Notification Bell */}
          <button className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-3.5-3.5 1.5-1.5L21 15v6h-6zm-2-7a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Profile */}
          <button className="flex items-center space-x-2 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </button>

          {/* Mobile Navigation Toggle */}
          <MobileNavigation 
            items={items}
            currentPath={currentPath}
            onItemClick={onItemClick}
          />
        </div>
      </div>
    </header>
  );
};