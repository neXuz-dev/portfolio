"use client";

import React, { useEffect } from 'react';
import { CheckCircle, ArrowLeft, ShoppingCart } from 'lucide-react';
import CustomCursor from '../../../components/CustomCursor';
import ParticleBackground from '../../../components/ParticleBackground';

export default function SuccessPage() {
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

      <nav className="fixed top-0 w-full bg-gray-800/70 backdrop-blur-sm shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/store" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
              <ArrowLeft size={18} />
              <span className="text-sm">Store</span>
            </a>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <ShoppingCart size={20} className="text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Store
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-900/30 border border-green-700/50 mb-6">
            <CheckCircle size={40} className="text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-100 mb-3">Payment Successful</h1>
          <p className="text-gray-400 mb-2">
            Thank you for your purchase. You will receive a confirmation email with download instructions shortly.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            If you don't receive it within a few minutes, check your spam folder or contact me.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/store"
              className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-colors text-sm font-medium"
            >
              Back to Store
            </a>
            <a
              href="/#contact"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm font-medium"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
