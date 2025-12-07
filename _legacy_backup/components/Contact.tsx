import React from 'react';
import { Icon } from './Icon';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
      
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Halo, saya <strong>Tomy Bachtiar</strong>. Konsultasikan kebutuhan website Anda langsung dengan saya. Gratis konsultasi awal!
            </p>
            
            <div className="mt-8 space-y-6">
              <a href="https://wa.me/6285241476413" target="_blank" rel="noreferrer" className="flex items-start group p-4 rounded-xl transition-colors hover:bg-slate-50">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    <Icon name="Phone" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">WhatsApp</h3>
                  <p className="mt-1 text-slate-600 group-hover:text-green-600 transition-colors">0852-4147-6413</p>
                </div>
              </a>
              
              <div className="flex items-start group p-4 rounded-xl transition-colors hover:bg-slate-50">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-sky-500 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    <Icon name="Mail" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Social Media</h3>
                  <p className="mt-1 text-slate-600 group-hover:text-sky-600 transition-colors">@Tomybachtiar94</p>
                </div>
              </div>
              
              <div className="flex items-start group p-4 rounded-xl transition-colors hover:bg-slate-50">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    <Icon name="MapPin" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Lokasi</h3>
                  <p className="mt-1 text-slate-600">Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-2xl relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-2xl"></div>
            
            <form className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
                <input type="text" id="name" className="block w-full px-4 py-3 mt-1 bg-slate-50 border rounded-xl border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Nama Anda" />
              </div>
              
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-slate-700">No. WhatsApp</label>
                <input type="tel" id="contact" className="block w-full px-4 py-3 mt-1 bg-slate-50 border rounded-xl border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="08xx-xxxx-xxxx" />
              </div>
              
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-slate-700">Pilih Paket Tertarik</label>
                <select id="package" className="block w-full px-4 py-3 mt-1 bg-slate-50 border rounded-xl border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                  <option>Landing Page Sederhana</option>
                  <option>Company Profile UMKM</option>
                  <option>Website Portofolio</option>
                  <option>Undangan Digital</option>
                  <option>Jasa Perbaikan Website</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Pesan / Detail Kebutuhan</label>
                <textarea id="message" rows={4} className="block w-full px-4 py-3 mt-1 bg-slate-50 border rounded-xl border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Ceritakan singkat kebutuhan website Anda..."></textarea>
              </div>
              
              <button type="button" onClick={() => window.open('https://wa.me/6285241476413', '_blank')} className="w-full px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-200 transform transition hover:-translate-y-1">
                Kirim Pesan ke WhatsApp Tomy
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};