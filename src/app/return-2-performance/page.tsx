'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { translations } from '../translations';

export default function ReturnToPerformance() {
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
      <section 
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500 to-green-600 text-white"
        style={{ 
          backgroundImage: 'url(/images/return-2-performance.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.returnToPerformance.title}
            </h1>
            <p className="text-xl mb-8">
              {t.returnToPerformance.subtitle}
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/" 
                className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 inline-block"
              >
                Terug naar home
              </Link>
              <Link 
                href="/learning-strategies" 
                className="bg-han-pink text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 inline-block"
              >
                {t.hero.startButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              {t.returnToPerformance.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Learning Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-han-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-han-dark mb-12 text-center">
            Onderwerpen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(t.returnToPerformance.topics).map(([key, topic], index) => (
              <div
                key={key}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-24 bg-green-600 flex items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-white text-center">{topic.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{topic.description}</p>
                  
                  <h4 className="text-lg font-semibold text-han-dark mb-3">Leerdoelen:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {topic.learningGoals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="text-gray-700">{goal}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-han-dark mb-3">Aanbevolen leerstrategieën:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">{t.learningStrategies.strategies.items.retrieval.title}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">{t.learningStrategies.strategies.items.spaced.title}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">{t.learningStrategies.strategies.items.mindmapping.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/learning-strategies" 
              className="bg-han-pink text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 inline-block"
            >
              Meer over leerstrategieën
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-han-dark mb-8">
            Bronnen
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Bekijk deze aanbevolen literatuur en bronnen om meer te leren over revalidatie en terugkeer naar sport.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
              <h3 className="font-semibold text-han-dark mb-2">Wetenschappelijke artikelen</h3>
              <p className="text-gray-600 text-sm mb-4">Recente studies over bindweefselherstel en revalidatie</p>
              <a href="#" className="text-han-red hover:underline">Bekijk artikelen →</a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
              <h3 className="font-semibold text-han-dark mb-2">Video's</h3>
              <p className="text-gray-600 text-sm mb-4">Instructievideo's over trainingsmethoden</p>
              <a href="#" className="text-han-red hover:underline">Bekijk video's →</a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
              <h3 className="font-semibold text-han-dark mb-2">Casussen</h3>
              <p className="text-gray-600 text-sm mb-4">Praktijkvoorbeelden van succesvolle revalidatie</p>
              <a href="#" className="text-han-red hover:underline">Bekijk casussen →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 