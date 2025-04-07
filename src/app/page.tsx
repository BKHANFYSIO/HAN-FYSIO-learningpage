'use client';

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { translations } from './translations'
import { Suspense } from 'react';

const learningThemes = [
  {
    title: 'Return-2-Performance',
    image: '/images/Return-2-Performance.jpg',
  },
  {
    title: 'Fit in the Hood',
    image: '/images/Fit-in-hood.jpg',
  },
  {
    title: 'Learn-2-Move',
    image: '/images/Learn-2-Move.jpg',
  },
  {
    title: 'Choose-2-Move',
    image: '/images/Choose-2-Move.jpg',
  },
  {
    title: 'Stay@Work',
    image: '/images/Stay-at-Work.jpg',
  },
  {
    title: 'Explore Pain',
    image: '/images/Explore-Pain.jpg',
  },
  {
    title: 'Patient Journey',
    image: '/images/Patient-Journey.jpg',
  },
]

function HomeContent() {
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
      <section className="pt-24 pb-12 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              {t.hero.title}{" "}
              <br />
              <span className="text-han-red">{t.hero.changeTheWay}</span>{" "}
              {t.hero.weLearn}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {t.hero.welcomeText}
            </p>
            <Link
              href="/learning-strategies"
              className="mt-8 inline-block bg-han-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition"
            >
              {t.hero.startButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Themes */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningThemes.map((theme, index) => (
              <div
                key={theme.title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                style={{ backgroundImage: `${theme.image}` }}
              >
                <Link href={theme.title === 'Return-2-Performance' ? '/return-2-performance' : '#'}>
                  <div className="relative">
                    <img
                      src={theme.image}
                      alt={theme.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{theme.title}</h3>
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

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
} 