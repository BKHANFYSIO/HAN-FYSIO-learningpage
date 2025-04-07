'use client';

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { translations } from './translations'

const learningThemes = [
  {
    title: 'Return-2-Performance',
    image: '/images/return-2-performance.jpg',
  },
  {
    title: 'Fit in the Hood',
    image: '/images/fit-in-hood.jpg',
  },
  {
    title: 'Learn-2-Move',
    image: '/images/learn-2-move.jpg',
  },
  {
    title: 'Choose-2-Move',
    image: '/images/choose-2-move.jpg',
  },
  {
    title: 'Stay@Work',
    image: '/images/stay-at-work.jpg',
  },
  {
    title: 'Explore Pain',
    image: '/images/explore-pain.jpg',
  },
  {
    title: 'Patient Journey',
    image: '/images/patient-journey.jpg',
  },
]

export default function Home() {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') || 'nl'
  const t = translations[lang as keyof typeof translations]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="https://www.han.nl/" className="flex items-center" target="_blank" rel="noopener noreferrer">
                <span className="text-han-red font-bold text-xl">HAN</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="?lang=nl" 
                className={`${lang === 'nl' ? 'text-han-red' : 'text-gray-600'} hover:text-han-red`}
              >
                NL
              </Link>
              <Link 
                href="?lang=en" 
                className={`${lang === 'en' ? 'text-han-red' : 'text-gray-600'} hover:text-han-red`}
              >
                EN
              </Link>
              <Link 
                href="?lang=de" 
                className={`${lang === 'de' ? 'text-han-red' : 'text-gray-600'} hover:text-han-red`}
              >
                DE
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-han-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-han-dark mb-6">
              {t.hero.title}
              <br />
              <span className="text-han-pink">{t.hero.changeTheWay}</span>
              <br />
              {t.hero.weLearn}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t.hero.welcomeText}
            </p>
            <Link 
              href="/learning-strategies" 
              className="bg-han-pink text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 inline-block"
            >
              {t.hero.startButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Themes Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningThemes.map((theme, index) => (
              <div
                key={theme.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={theme.title === 'Return-2-Performance' ? '/return-2-performance' : '#'}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={theme.image} 
                      alt={theme.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-han-dark mb-2">{theme.title}</h3>
                    <p className="text-gray-600">{t.themes.descriptions[theme.title]}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 