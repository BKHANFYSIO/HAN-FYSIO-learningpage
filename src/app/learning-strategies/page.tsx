'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { translations } from '../translations';
import Image from 'next/image';

export default function LearningStrategies() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'nl';
  const t = translations[lang as keyof typeof translations];

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
              {t.learningStrategies.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t.learningStrategies.subtitle}
            </p>
            <Link href="/" className="bg-han-pink text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 inline-block">
              Terug naar home
            </Link>
          </div>
        </div>
      </section>

      {/* Brain function section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-han-dark mb-6">
                {t.learningStrategies.brainTitle}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.learningStrategies.brainDescription}
              </p>
            </div>
            <div className="bg-han-gray rounded-lg p-6 shadow-lg">
              <div className="aspect-w-4 aspect-h-3 relative h-64 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-500">Brain Function</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning strategies section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-han-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-han-dark mb-12 text-center">
            {t.learningStrategies.strategies.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t.learningStrategies.strategies.items).map(([key, strategy], index) => (
              <div
                key={key}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-32 bg-han-pink flex items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-white text-center">{strategy.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-han-dark mb-8">
            Wil je meer leren?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Bekijk onze aanbevolen bronnen voor meer informatie over effectieve studiemethoden en hoe je het beste uit je studie kunt halen.
          </p>
          <Link 
            href="https://www.han.nl/" 
            className="bg-han-pink text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meer resources
          </Link>
        </div>
      </section>
    </main>
  );
} 