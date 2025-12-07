import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { ServiceModal } from './components/ServiceModal';
import { Contact } from './components/Contact';
import { Icon } from './components/Icon';
import { SERVICE_PACKAGES } from './constants';
import { ServicePackage } from './types';

function App() {
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl shadow-lg shadow-blue-200">
                <Icon name="Code2" size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">WebDev<span className="text-blue-600">Pro</span></span>
                <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">by Tomy Bachtiar</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#portfolio" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Portofolio</a>
              <a href="#contact" className="px-5 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-full hover:bg-blue-600 transition-colors shadow-md">
                Hubungi Saya
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                <Icon name={isMenuOpen ? "X" : "Menu"} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white shadow-xl">
            <div className="flex flex-col px-4 py-6 space-y-4">
              <a href="#" className="text-base font-medium text-slate-600 hover:text-blue-600">Home</a>
              <a href="#services" className="text-base font-medium text-slate-600 hover:text-blue-600">Layanan</a>
              <a href="#portfolio" className="text-base font-medium text-slate-600 hover:text-blue-600">Portofolio</a>
              <a href="#contact" className="text-base font-bold text-blue-600">Hubungi Saya</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Services Grid Section */}
      <section id="services" className="py-24 bg-slate-50 relative">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Layanan Kami</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Paket Website Terlaris
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Solusi lengkap untuk kebutuhan digital Anda dengan harga transparan dan hasil maksimal.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PACKAGES.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={() => setSelectedService(service)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Simple Features) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center">
              <div className="group">
                 <div className="mx-auto flex items-center justify-center w-20 h-20 mb-6 text-blue-600 bg-blue-50 rounded-3xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="LayoutTemplate" size={36} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Desain Modern & Aesthetic</h3>
                 <p className="text-slate-600 leading-relaxed">Tampilan visual yang mengikuti tren terkini, clean, dan nyaman dipandang mata user.</p>
              </div>
              <div className="group">
                 <div className="mx-auto flex items-center justify-center w-20 h-20 mb-6 text-cyan-600 bg-cyan-50 rounded-3xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Wrench" size={36} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Teknis Handal & Cepat</h3>
                 <p className="text-slate-600 leading-relaxed">Kode yang bersih, loading cepat, dan dioptimasi untuk mesin pencari (SEO Friendly).</p>
              </div>
              <div className="group">
                 <div className="mx-auto flex items-center justify-center w-20 h-20 mb-6 text-sky-600 bg-sky-50 rounded-3xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="HeartHandshake" size={36} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Support Langsung Tomy</h3>
                 <p className="text-slate-600 leading-relaxed">Komunikasi langsung tanpa perantara. Pendampingan penuh dari awal hingga online.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t-4 border-blue-500">
        <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Code2" size={24} className="text-blue-500" />
              <span className="text-2xl font-bold text-white">WebDev<span className="text-blue-500">Pro</span></span>
            </div>
            <p className="text-sm font-medium text-slate-500">Designed & Developed by Tomy Bachtiar</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://instagram.com/Tomybachtiar94" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-500 transition-colors">
              <span className="font-semibold">Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a href="https://twitter.com/Tomybachtiar94" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sky-500 transition-colors">
              <span className="font-semibold">Twitter</span>
            </a>
          </div>

          <p className="text-sm text-slate-600">&copy; 2024 Tomy Bachtiar. All rights reserved.</p>
        </div>
      </footer>

      {/* Detail Modal Overlay */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

    </div>
  );
}

export default App;