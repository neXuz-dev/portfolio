"use client";

import React, { useState, useCallback } from 'react';
import { Shield, Cpu, Gamepad2, HardDrive, Clock, ShoppingCart, MessageSquare, ArrowLeft, ChevronRight, Mail, Loader2 } from 'lucide-react';
import products from '../../store/products';

const iconMap = { Shield, Cpu, Gamepad2, HardDrive };

const ProductCard = ({ product, language, onBuy, buying }) => {
  const content = product.content[language];
  const Icon = iconMap[product.icon] || Shield;
  const isBuyable = !product.comingSoon && !product.isService && product.price != null;
  const isLoading = buying === product.id;

  return (
    <div
      className={`group relative flex flex-col border bg-panel p-6 transition-colors ${
        product.comingSoon ? 'border-line opacity-60' : 'border-line hover:border-edge hover:bg-raised'
      }`}
    >
      {product.comingSoon && (
        <div className="absolute right-3 top-3 flex items-center gap-1.5 border border-warn/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-warn">
          <Clock size={11} />
          {language === 'fr' ? 'Bientôt' : 'Coming Soon'}
        </div>
      )}
      {product.isService && (
        <div className="absolute right-3 top-3 border border-accent/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
          {language === 'fr' ? 'Service' : 'Service'}
        </div>
      )}

      <div className="mb-5 flex items-start gap-4">
        <div className="flex-shrink-0 border border-edge p-3 text-accent">
          <Icon size={26} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-fg">{content.name}</h3>
          <p className="mt-0.5 text-xs uppercase tracking-wider text-dim">{content.subtitle}</p>
        </div>
      </div>

      <p className="mb-5 flex-grow text-sm leading-relaxed text-dim">{content.description}</p>

      <ul className="mb-5 space-y-2">
        {content.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-fg/90">
            <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {product.tags.map((tag, idx) => (
          <span key={idx} className="chip">{tag}</span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-line pt-5">
        <div>
          {product.price != null ? (
            <div className="tabular-nums">
              <span className="text-2xl font-bold text-accent">{Math.floor(product.price)}</span>
              <span className="text-base text-dim">.{(product.price % 1).toFixed(2).slice(2)}</span>
              <span className="ml-1 text-xs text-dim">{product.currency}</span>
            </div>
          ) : product.isService ? (
            <span className="text-sm text-accent">{language === 'fr' ? 'sur devis' : 'get a quote'}</span>
          ) : (
            <span className="text-sm text-dim">{language === 'fr' ? 'prix à annoncer' : 'price TBA'}</span>
          )}
        </div>

        {isBuyable ? (
          <button onClick={() => onBuy(product.id)} disabled={isLoading} className="btn btn-accent disabled:cursor-wait">
            {isLoading ? <Loader2 size={15} className="animate-spin" /> : <ShoppingCart size={15} />}
            {isLoading ? (language === 'fr' ? 'chargement' : 'loading') : language === 'fr' ? 'acheter' : 'buy now'}
          </button>
        ) : product.comingSoon ? (
          <span className="border border-line px-3 py-1.5 text-sm uppercase tracking-wider text-dim">
            {language === 'fr' ? 'bientôt' : 'soon'}
          </span>
        ) : (
          <a href="/#contact" className="btn btn-accent">
            <MessageSquare size={15} />
            {language === 'fr' ? 'discuter' : "let's talk"}
          </a>
        )}
      </div>
    </div>
  );
};

export default function StorePage() {
  const [language, setLanguage] = useState('en');
  const [buying, setBuying] = useState(null);
  const [error, setError] = useState(null);

  const availableProducts = products.filter((p) => !p.comingSoon && !p.isService);
  const comingSoonProducts = products.filter((p) => p.comingSoon);
  const serviceProducts = products.filter((p) => p.isService);

  const handleBuy = useCallback(async (productId) => {
    setBuying(productId);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Checkout failed');
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setBuying(null);
    }
  }, []);

  return (
    <div className="scanlines min-h-screen bg-void text-fg">
      {/* Nav */}
      <nav className="fixed top-0 z-30 w-full border-b border-line bg-void/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 text-sm uppercase tracking-wider text-dim transition-colors hover:text-accent">
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">portfolio</span>
            </a>
            <div className="h-5 w-px bg-line" />
            <span className="flex items-center gap-2 text-lg font-bold">
              <img src="/favicon.ico" alt="Rz Software logo" className="h-7 w-7 border border-edge" /> store
            </span>
          </div>

          <div className="flex items-center border border-line text-xs">
            {['en', 'fr'].map((code) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
                  language === code ? 'bg-brand text-white' : 'text-dim hover:text-accent'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-7xl px-4 pt-24 pb-10">
        <div className="panel">
          <div className="panel-head">
            <span><span className="text-accent">##</span> {language === 'fr' ? 'Boutique' : 'Store'}</span>
            <span className="text-dim">apt list --installed</span>
          </div>
          <div className="px-6 py-10 sm:px-8">
            <div className="mb-4 inline-flex items-center gap-2 border border-edge px-2.5 py-1 text-xs uppercase tracking-wider text-accent">
              <ShoppingCart size={13} />
              {language === 'fr'
                ? `${availableProducts.length} produit${availableProducts.length > 1 ? 's' : ''} disponible${availableProducts.length > 1 ? 's' : ''}`
                : `${availableProducts.length} product${availableProducts.length > 1 ? 's' : ''} available`}
            </div>
            <h1 className="text-3xl font-bold text-fg md:text-4xl">
              {language === 'fr' ? 'Outils & Logiciels' : 'Tools & Software'}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-dim">
              <span className="text-dim"># </span>
              {language === 'fr'
                ? 'Outils de qualité production issus de mon expertise en programmation système, reverse engineering et développement Unreal Engine 5.'
                : 'Production-grade tools built from my expertise in systems programming, reverse engineering, and Unreal Engine 5 development.'}
            </p>
          </div>
        </div>
      </header>

      {/* Products */}
      <main className="mx-auto max-w-7xl px-4 pb-16">
        {error && (
          <div className="mb-6 flex items-center justify-between border border-alert/50 px-4 py-3 text-sm text-alert">
            <span><span className="text-alert">! </span>{error}</span>
            <button onClick={() => setError(null)} className="ml-4 border border-alert/40 px-2 text-alert hover:bg-alert hover:text-void">
              x
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {availableProducts.map((product) => (
            <ProductCard key={product.id} product={product} language={language} onBuy={handleBuy} buying={buying} />
          ))}
        </div>

        {comingSoonProducts.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-dim">
              <Clock size={15} />
              {language === 'fr' ? 'Bientôt disponible' : 'Coming Soon'}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {comingSoonProducts.map((product) => (
                <ProductCard key={product.id} product={product} language={language} onBuy={handleBuy} buying={buying} />
              ))}
            </div>
          </div>
        )}

        {serviceProducts.length > 0 && (
          <div className="mt-10">
            {serviceProducts.map((product) => (
              <div key={product.id} className="panel">
                <div className="flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center md:p-8">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-fg">
                      <span className="text-accent">›</span> {product.content[language].name}
                    </h3>
                    <p className="mb-4 max-w-xl text-sm text-dim">{product.content[language].description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.content[language].features.map((f, i) => (
                        <span key={i} className="chip">{f}</span>
                      ))}
                    </div>
                  </div>
                  <a href="/#contact" className="btn btn-accent shrink-0">
                    <Mail size={16} />
                    {language === 'fr' ? 'discutons' : "let's talk"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <footer className="mt-12 border-t border-line pt-6 text-xs text-dim">
          <p>
            <span className="text-accent">$</span>{' '}
            {language === 'fr' ? 'des questions ? mail' : 'questions? mail'}{' '}
            <a href="mailto:jobdorge.pro@gmail.com" className="text-accent hover:text-fg">jobdorge.pro@gmail.com</a>
          </p>
          <p className="mt-1">© neXuz-dev, {new Date().getFullYear()}.</p>
        </footer>
      </main>
    </div>
  );
}
