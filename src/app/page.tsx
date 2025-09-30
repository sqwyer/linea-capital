import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Candara, sans-serif' }} className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo-full.png" alt="Linea Capital" width={200} height={48} className="h-12" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#4a7c71] transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-[#4a7c71] transition">Services</a>
            <a href="#criteria" className="text-gray-700 hover:text-[#4a7c71] transition">Investment Criteria</a>
            <a href="#case-studies" className="text-gray-700 hover:text-[#4a7c71] transition">Case Studies</a>
            <a href="#team" className="text-gray-700 hover:text-[#4a7c71] transition">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-[#4a7c71] transition">Contact</a>
          </div>
          <button 
            className="px-6 py-2 rounded text-white transition"
            style={{ backgroundColor: '#1a1f4d' }}
          >
            Client Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#1a1f4d' }}>
              Strategic Capital<br />Solutions for<br />Middle-Market Firms
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Linea Capital is a private capital advisor providing tailored financial solutions 
              and investment sponsorship for growing businesses.
            </p>
            <div className="flex space-x-4">
              <button 
                className="px-8 py-3 rounded text-white text-lg transition hover:opacity-90"
                style={{ backgroundColor: '#4a7c71' }}
              >
                Learn More
              </button>
              <button 
                className="px-8 py-3 rounded text-lg transition border-2"
                style={{ borderColor: '#1a1f4d', color: '#1a1f4d' }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-center" style={{ color: '#1a1f4d' }}>
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Two complementary business lines designed to support your growth
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Middle-Market Capital Advisory */}
            <div className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" 
                   style={{ backgroundColor: '#e8f4f0' }}>
                <span className="text-2xl" style={{ color: '#4a7c71' }}>●</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1a1f4d' }}>
                Middle-Market Capital Advisory
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Expert guidance for companies seeking capital solutions. We provide strategic 
                advice on debt and equity financing, mergers and acquisitions, and capital structure 
                optimization.
              </p>
              <button 
                className="text-sm font-semibold flex items-center group"
                style={{ color: '#4a7c71' }}
              >
                Explore Advisory Services
                <span className="ml-2 group-hover:ml-3 transition-all">→</span>
              </button>
            </div>

            {/* Private Capital Investment Sponsorship */}
            <div className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" 
                   style={{ backgroundColor: '#e8eef4' }}>
                <span className="text-2xl" style={{ color: '#1a1f4d' }}>●</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1a1f4d' }}>
                Private Capital Investment Sponsorship
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Direct investment partnership for exceptional opportunities. We sponsor and 
                co-invest in businesses that align with our investment criteria and strategic vision.
              </p>
              <button 
                className="text-sm font-semibold flex items-center group"
                style={{ color: '#4a7c71' }}
              >
                View Investment Criteria
                <span className="ml-2 group-hover:ml-3 transition-all">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6" style={{ backgroundColor: '#1a1f4d' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8 text-white">
            Why Linea Capital
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-white">
            <div>
              <div className="text-5xl mb-4" style={{ color: '#4a7c71' }}>15+</div>
              <h3 className="text-xl mb-2">Years Experience</h3>
              <p className="text-gray-300">Deep expertise in middle-market transactions</p>
            </div>
            <div>
              <div className="text-5xl mb-4" style={{ color: '#4a7c71' }}>$500M+</div>
              <h3 className="text-xl mb-2">Capital Deployed</h3>
              <p className="text-gray-300">Across diverse industries and structures</p>
            </div>
            <div>
              <div className="text-5xl mb-4" style={{ color: '#4a7c71' }}>100%</div>
              <h3 className="text-xl mb-2">Client Focused</h3>
              <p className="text-gray-300">Tailored solutions for your unique needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6" style={{ color: '#1a1f4d' }}>
            Ready to Explore Your Options?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how Linea Capital can support your growth objectives
          </p>
          <button 
            className="px-10 py-4 rounded text-white text-lg transition hover:opacity-90"
            style={{ backgroundColor: '#4a7c71' }}
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/logo-icon.png" alt="Linea Capital" width={64} height={64} className="h-16 mb-4" />
              <p className="text-sm text-gray-600">Strategic capital solutions for middle-market firms</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#1a1f4d' }}>Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#4a7c71]">Capital Advisory</a></li>
                <li><a href="#" className="hover:text-[#4a7c71]">Investment Sponsorship</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#1a1f4d' }}>Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#4a7c71]">About</a></li>
                <li><a href="#" className="hover:text-[#4a7c71]">Team</a></li>
                <li><a href="#" className="hover:text-[#4a7c71]">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#1a1f4d' }}>Contact</h4>
              <p className="text-sm text-gray-600">info@lineacapital.com</p>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-gray-600">
            © 2025 Linea Capital, LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}