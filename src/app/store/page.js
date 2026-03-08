"use client";

import React, { useState, useEffect } from 'react';
import { Shield, Cpu, Gamepad2, HardDrive, ExternalLink, Clock, ShoppingCart, MessageSquare, ArrowLeft, ChevronRight, Mail } from 'lucide-react';
import CustomCursor from '../../components/CustomCursor';
import ParticleBackground from '../../components/ParticleBackground';
import products from '../../store/products';

const iconMap = { Shield, Cpu, Gamepad2, HardDrive };

const tagColors = {
  'Rust': 'bg-orange-900/30 text-orange-300 border-orange-800',
  'Security': 'bg-red-900/30 text-red-300 border-red-800',
  'Windows': 'bg-blue-900/30 text-blue-300 border-blue-800',
  'TypeScript': 'bg-sky-900/30 text-sky-300 border-sky-800',
  'MCP': 'bg-emerald-900/30 text-emerald-300 border-emerald-800',
  'AI Tooling': 'bg-violet-900/30 text-violet-300 border-violet-800',
  'C++': 'bg-purple-900/30 text-purple-300 border-purple-800',
  'Unreal Engine 5': 'bg-indigo-900/30 text-indigo-300 border-indigo-800',
  'Profiling': 'bg-cyan-900/30 text-cyan-300 border-cyan-800',
  'SSH': 'bg-lime-900/30 text-lime-300 border-lime-800',
  'egui': 'bg-amber-900/30 text-amber-300 border-amber-800',
  'Backup': 'bg-teal-900/30 text-teal-300 border-teal-800',
  'Gameplay': 'bg-green-900/30 text-green-300 border-green-800',
  'Rendering': 'bg-rose-900/30 text-rose-300 border-rose-800',
};

const ProductCard = ({ product, language }) => {
  const content = product.content[language];
  const Icon = iconMap[product.icon] || Shield;
  const isAvailable = !product.comingSoon && !product.isService && product.purchaseUrl;

  return (
    <div className={`group relative bg-gray-900/60 rounded-xl border transition-all duration-300 p-7 flex flex-col ${
      product.comingSoon
        ? 'border-gray-700/40 opacity-60'
        : 'border-gray-700/50 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1'
    }`}>
      {product.comingSoon && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-amber-900/30 text-amber-300 border border-amber-800">
          <Clock size={12} />
          {language === 'fr' ? 'Bientot' : 'Coming Soon'}
        </div>
      )}

      {product.isService && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800">
          {language === 'fr' ? 'Service' : 'Service'}
        </div>
      )}

      <div className="flex items-start gap-4 mb-5">
        <div className="p-3.5 rounded-xl bg-gray-800/80 text-gray-400 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0">
          <Icon size={30} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-100">{content.name}</h3>
          <p className="text-sm text-gray-400 mt-0.5">{content.subtitle}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-grow">{content.description}</p>

      <ul className="space-y-2.5 mb-6">
        {content.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-400">
            <ChevronRight size={14} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {product.tags.map((tag, idx) => (
          <span
            key={idx}
            className={`text-xs px-2.5 py-0.5 rounded-full border ${tagColors[tag] || 'bg-gray-900/30 text-gray-300 border-gray-800'}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-5 border-t border-gray-700/40">
        <div>
          {product.price != null ? (
            <div>
              <span className="text-3xl font-bold text-gray-100">{Math.floor(product.price)}</span>
              <span className="text-lg text-gray-400">.{(product.price % 1).toFixed(2).slice(2)}</span>
              <span className="text-sm text-gray-500 ml-1">{product.currency}</span>
            </div>
          ) : product.isService ? (
            <span className="text-sm text-blue-400 font-medium">
              {language === 'fr' ? 'Sur devis' : 'Get a quote'}
            </span>
          ) : (
            <span className="text-sm text-gray-500">
              {language === 'fr' ? 'Prix a annoncer' : 'Price TBA'}
            </span>
          )}
        </div>

        {isAvailable ? (
          <a
            href={product.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <ShoppingCart size={16} />
            {language === 'fr' ? 'Acheter' : 'Buy Now'}
            <ExternalLink size={14} />
          </a>
        ) : product.comingSoon ? (
          <span className="px-5 py-2.5 bg-gray-800/60 text-gray-500 rounded-lg text-sm cursor-default">
            {language === 'fr' ? 'Bientot disponible' : 'Coming Soon'}
          </span>
        ) : (
          <a
            href="/#contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/80 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <MessageSquare size={16} />
            {product.isService
              ? (language === 'fr' ? 'Discuter' : 'Let\'s Talk')
              : (language === 'fr' ? 'Me contacter' : 'Contact Me')}
          </a>
        )}
      </div>
    </div>
  );
};

export default function StorePage() {
  const [language, setLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'fr', name: 'Francais', flag: 'FR' },
  ];

  const availableProducts = products.filter(p => !p.comingSoon && !p.isService);
  const comingSoonProducts = products.filter(p => p.comingSoon);
  const serviceProducts = products.filter(p => p.isService);

  useEffect(() => {
    document.body.classList.add('cursor-none');
    return () => document.body.classList.remove('cursor-none');
  }, []);

  return (
    <div className="min-h-screen text-gray-100 relative overflow-x-hidden">
      <CustomCursor />

      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-gray-800/70 backdrop-blur-sm shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm hidden sm:inline">{language === 'fr' ? 'Portfolio' : 'Portfolio'}</span>
            </a>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <ShoppingCart size={20} className="text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {language === 'fr' ? 'Boutique' : 'Store'}
              </span>
            </div>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-600/60 text-gray-200 rounded-full px-3 py-2 border border-gray-500/50 hover:bg-gray-500/70 transition-all duration-300 text-sm"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl border border-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-blue-900/20 to-purple-900/20 backdrop-blur-sm"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="relative px-8 py-12 md:py-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-800/40 text-blue-300 text-sm mb-6">
                <ShoppingCart size={14} />
                {language === 'fr'
                  ? `${availableProducts.length} produit${availableProducts.length > 1 ? 's' : ''} disponible${availableProducts.length > 1 ? 's' : ''}`
                  : `${availableProducts.length} product${availableProducts.length > 1 ? 's' : ''} available`}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                  {language === 'fr' ? 'Outils & Logiciels' : 'Tools & Software'}
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {language === 'fr'
                  ? 'Outils de qualite production issus de mon expertise en programmation systeme, reverse engineering et developpement Unreal Engine 5.'
                  : 'Production-grade tools built from my expertise in systems programming, reverse engineering, and Unreal Engine 5 development.'}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Products */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
        {/* Available products */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {availableProducts.map((product) => (
            <ProductCard key={product.id} product={product} language={language} />
          ))}
        </div>

        {/* Coming soon */}
        {comingSoonProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-gray-400 mb-4 flex items-center gap-2">
              <Clock size={18} />
              {language === 'fr' ? 'Bientot disponible' : 'Coming Soon'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {comingSoonProducts.map((product) => (
                <ProductCard key={product.id} product={product} language={language} />
              ))}
            </div>
          </div>
        )}

        {/* Service */}
        {serviceProducts.length > 0 && (
          <div className="mb-12">
            {serviceProducts.map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden rounded-xl border border-blue-500/15"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/20 backdrop-blur-sm"></div>
                <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">
                      {product.content[language].name}
                    </h3>
                    <p className="text-gray-400 mb-4 max-w-xl">
                      {product.content[language].description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {product.content[language].features.map((f, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-gray-800/60 text-gray-300 border border-gray-700/50">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="/#contact"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 font-medium whitespace-nowrap"
                  >
                    <Mail size={18} />
                    {language === 'fr' ? 'Discutons' : 'Let\'s Talk'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800/50">
          <p>
            {language === 'fr' ? 'Des questions ? ' : 'Questions? '}
            <a href="mailto:jobdorge.pro@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              jobdorge.pro@gmail.com
            </a>
          </p>
          <p className="mt-2">
            neXuz-dev, {new Date().getFullYear()}.
          </p>
        </footer>
      </main>
    </div>
  );
}
