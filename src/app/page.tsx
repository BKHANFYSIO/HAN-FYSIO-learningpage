'use client';

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { translations } from './translations'
import { Suspense } from 'react';
import Navigation from './components/Navigation';

const learningThemes = [
  {
    title: 'Return-2-Performance',
    image: '/images/Return-2-Performance.jpg',
    path: '/return-2-performance',
  },
  {
    title: 'Fit in the Hood',
    image: '/images/Fit-in-hood.jpg',
    path: '/fit-in-the-hood',
  },
  {
    title: 'Learn-2-Move',
    image: '/images/Learn-2-Move.jpg',
    path: '/learn-2-move',
  },
  {
    title: 'Choose-2-Move',
    image: '/images/Choose-2-Move.jpg',
    path: '/choose-2-move',
  },
  {
    title: 'Stay@Work',
    image: '/images/Stay-at-Work.jpg',
    path: '/stay-at-work',
  },
  {
    title: 'Explore Pain',
    image: '/images/Explore-Pain.jpg',
    path: '/explore-pain',
  },
  {
    title: 'Patient Journey',
    image: '/images/Patient-Journey.jpg',
    path: '/patient-journey',
  },
]

function HomeContent() {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') || 'nl'
  const t = translations[lang as keyof typeof translations]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />

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
            {learningThemes.map((theme) => (
              <div
                key={theme.title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <Link href={theme.path}>
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