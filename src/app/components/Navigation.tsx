'use client';

import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import { translations } from '../translations';
import { useState } from 'react';

export default function Navigation() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const lang = searchParams.get('lang') || 'nl';
  const t = translations[lang as keyof typeof translations];
  const [themesDropdownOpen, setThemesDropdownOpen] = useState(false);

  const learningThemes = [
    {
      title: 'Return-2-Performance',
      path: '/return-2-performance',
    },
    {
      title: 'Fit in the Hood',
      path: '/fit-in-the-hood',
    },
    {
      title: 'Learn-2-Move',
      path: '/learn-2-move',
    },
    {
      title: 'Choose-2-Move',
      path: '/choose-2-move',
    },
    {
      title: 'Stay@Work',
      path: '/stay-at-work',
    },
    {
      title: 'Explore Pain',
      path: '/explore-pain',
    },
    {
      title: 'Patient Journey',
      path: '/patient-journey',
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="https://www.han.nl/" className="flex items-center" target="_blank" rel="noopener noreferrer">
              <span className="text-han-red font-bold text-xl">HAN</span>
            </Link>
            
            <div className="hidden md:flex space-x-4">
              <Link 
                href={`/?lang=${lang}`} 
                className={`${pathname === '/' ? 'text-han-red' : 'text-gray-600'} hover:text-han-red px-3 py-2`}
              >
                Home
              </Link>
              
              <div className="relative">
                <button 
                  onClick={() => setThemesDropdownOpen(!themesDropdownOpen)}
                  className={`${learningThemes.some(theme => pathname === theme.path) ? 'text-han-red' : 'text-gray-600'} hover:text-han-red px-3 py-2 flex items-center`}
                >
                  Thema's
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {themesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {learningThemes.map((theme) => (
                        <Link
                          key={theme.title}
                          href={`${theme.path}?lang=${lang}`}
                          className={`${pathname === theme.path ? 'bg-gray-100 text-han-red' : 'text-gray-700'} block px-4 py-2 text-sm hover:bg-gray-100`}
                          onClick={() => setThemesDropdownOpen(false)}
                        >
                          {theme.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href={`/learning-strategies?lang=${lang}`} 
                className={`${pathname === '/learning-strategies' ? 'text-han-red' : 'text-gray-600'} hover:text-han-red px-3 py-2`}
              >
                Hoe leren werkt
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href={`${pathname}?lang=nl`} 
              className={`${lang === 'nl' ? 'text-han-red' : 'text-gray-600'} hover:text-han-red`}
            >
              NL
            </Link>
            <Link 
              href={`${pathname}?lang=en`} 
              className={`${lang === 'en' ? 'text-han-red' : 'text-gray-600'} hover:text-han-red`}
            >
              EN
            </Link>
            <Link 
              href={`${pathname}?lang=de`} 
              className={`${lang === 'de' ? 'text-han-red' : 'text-gray-600'} hover:text-han-red`}
            >
              DE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 