"use client";

import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="scanlines min-h-screen bg-void text-fg">
      <nav className="fixed top-0 z-30 w-full border-b border-line bg-void/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <a href="/store" className="flex items-center gap-2 text-sm uppercase tracking-wider text-dim transition-colors hover:text-accent">
              <ArrowLeft size={16} />
              <span>store</span>
            </a>
            <div className="h-5 w-px bg-line" />
            <span className="flex items-center gap-2 text-lg font-bold">
              <img src="/favicon.ico" alt="Rz Software logo" className="h-7 w-7 border border-edge" /> store
            </span>
          </div>
        </div>
      </nav>

      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-lg panel">
          <div className="panel-head">
            <span><span className="text-accent">##</span> payment</span>
            <span className="text-accent">exit code 0</span>
          </div>
          <div className="p-8">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center border border-accent text-accent">
              <CheckCircle size={30} />
            </div>
            <h1 className="mb-3 text-2xl font-bold text-fg">
              <span className="text-accent">$</span> payment successful
            </h1>
            <p className="mb-2 text-sm text-dim">
              Thank you for your purchase. You will receive a confirmation email with download instructions shortly.
            </p>
            <p className="mb-8 text-xs text-dim">
              If you don&apos;t receive it within a few minutes, check your spam folder or contact me.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a href="/store" className="btn">back to store</a>
              <a href="/#contact" className="btn btn-accent">contact support</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
