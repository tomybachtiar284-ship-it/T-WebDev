import React from 'react';
import { Icon } from './Icon';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 lg:pt-40 lg:pb-32">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-cyan-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full border border-blue-100 shadow-sm">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-blue-600 rounded-full"></span>
              </span>
              Jasa Pembuatan Website Profesional
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Bangun Bisnis Digital Bersama <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Tomy Bachtiar</span>
            </h1>
            
            <p className="max-w-lg mx-auto lg:mx-0 mb-8 text-lg text-slate-600 leading-relaxed">
              Saya membantu UMKM dan profesional memiliki website modern, cepat, dan efektif. Pilih paket layanan yang sesuai dengan kebutuhan Anda.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <a href="#services" className="flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1">
                Lihat Paket Layanan
                <Icon name="ArrowRight" className="ml-2" size={20}/>
              </a>
              <a href="#contact" className="flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 shadow-sm">
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className="relative mx-auto lg:mr-0">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              {/* Decorative shapes behind photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-[2rem] rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl overflow-hidden border-4 border-white transform transition-transform hover:scale-[1.02] duration-500">
                 {/* 
                    ================================================================
                    PENTING: GANTI FOTO DI SINI
                    Karena saya AI, saya tidak bisa mengakses file lokal Anda.
                    Ganti URL di bawah ini dengan path file foto Anda sendiri.
                    Contoh: src="/images/foto-profil-tomy.jpg"
                    ================================================================
                 */}
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tomy Bachtiar - Professional Web Developer" 
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Icon name="CheckCircle2" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Status</p>
                  <p className="text-sm font-bold text-slate-900">Open for Projects</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};