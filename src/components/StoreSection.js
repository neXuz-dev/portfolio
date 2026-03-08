import React, { useState } from 'react';
import { Shield, Cpu, Gamepad2, HardDrive, ExternalLink, Clock, ShoppingCart, MessageSquare, ArrowRight } from 'lucide-react';
import products from '../store/products';

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
};

const scrollToContact = (e) => {
  e.preventDefault();
  const contactSection = document.querySelector('form');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const ProductCard = ({ product, language }) => {
  const [hovered, setHovered] = useState(false);
  const content = product.content[language];
  const Icon = iconMap[product.icon] || Shield;
  const isAvailable = !product.comingSoon && !product.isService && product.purchaseUrl;

  return (
    <div
      className={`relative bg-gray-900/50 rounded-lg border transition-all duration-300 p-6 flex flex-col ${
        product.comingSoon
          ? 'border-gray-700/50 opacity-70'
          : hovered
            ? 'border-blue-500/50 shadow-lg shadow-blue-500/10 -translate-y-1'
            : 'border-gray-700/50 hover:border-gray-600/80'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {product.comingSoon && (
        <div className="absolute top-3 right-3 flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-amber-900/30 text-amber-300 border border-amber-800">
          <Clock size={12} />
          {language === 'fr' ? 'Bientot' : 'Coming Soon'}
        </div>
      )}

      {product.isService && (
        <div className="absolute top-3 right-3 flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800">
          {language === 'fr' ? 'Service' : 'Service'}
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg transition-colors duration-300 flex-shrink-0 ${
          hovered && !product.comingSoon
            ? 'bg-blue-600/20 text-blue-400'
            : 'bg-gray-800/80 text-gray-400'
        }`}>
          <Icon size={28} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-100">{content.name}</h3>
          <p className="text-sm text-gray-400">{content.subtitle}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4 flex-grow">{content.description}</p>

      <ul className="space-y-2 mb-5">
        {content.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-400">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-5">
        {product.tags.map((tag, idx) => (
          <span
            key={idx}
            className={`text-xs px-2 py-0.5 rounded border ${tagColors[tag] || 'bg-gray-900/30 text-gray-300 border-gray-800'}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-700/50">
        <div>
          {product.price != null ? (
            <span className="text-2xl font-bold text-gray-100">
              {product.price.toFixed(2)}<span className="text-sm text-gray-400 ml-1">{product.currency}</span>
            </span>
          ) : product.isService ? (
            <span className="text-sm text-blue-400">
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
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <ShoppingCart size={16} />
            {language === 'fr' ? 'Acheter' : 'Buy Now'}
            <ExternalLink size={14} />
          </a>
        ) : product.comingSoon ? (
          <span className="px-4 py-2 bg-gray-700/50 text-gray-500 rounded-lg text-sm cursor-default">
            {language === 'fr' ? 'Bientot disponible' : 'Coming Soon'}
          </span>
        ) : (
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <MessageSquare size={16} />
            {product.isService
              ? (language === 'fr' ? 'Discuter' : 'Let\'s Talk')
              : (language === 'fr' ? 'Me contacter' : 'Contact Me')}
          </button>
        )}
      </div>
    </div>
  );
};

const StoreSection = ({ language }) => {
  const availableCount = products.filter(p => !p.comingSoon).length;

  return (
    <section className="max-w-6xl mx-auto mt-8 px-4 scroll-mt-24 relative z-10" id="store">
      <div className="relative rounded-lg shadow-2xl border border-blue-500/20 animate-on-scroll opacity-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-blue-900/30 backdrop-blur-sm"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-600/20">
                <ShoppingCart size={24} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {language === 'fr' ? 'Boutique' : 'Store'}
              </h2>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50">
                {language === 'fr'
                  ? `${availableCount} produit${availableCount > 1 ? 's' : ''} disponible${availableCount > 1 ? 's' : ''}`
                  : `${availableCount} product${availableCount > 1 ? 's' : ''} available`}
              </span>
            </div>
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl">
            {language === 'fr'
              ? 'Outils et logiciels issus de mon expertise en programmation systeme, automatisation et developpement Unreal Engine.'
              : 'Tools and software built from my expertise in systems programming, automation, and Unreal Engine development.'}
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} language={language} />
            ))}
          </div>

          {/* Custom work CTA */}
          <div className="mt-8 p-5 bg-gradient-to-r from-gray-900/60 to-blue-900/20 rounded-lg border border-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-200 font-medium">
                {language === 'fr'
                  ? 'Besoin d\'un outil specifique ?'
                  : 'Need something specific?'}
              </p>
              <p className="text-gray-400 text-sm">
                {language === 'fr'
                  ? 'Serveurs MCP, plugins UE5, outils Rust — je developpe sur mesure.'
                  : 'MCP servers, UE5 plugins, Rust tools — I build custom solutions.'}
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 text-sm font-medium whitespace-nowrap"
            >
              {language === 'fr' ? 'Discutons' : 'Get in Touch'}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
