import React from 'react';
import { ServicePackage } from '../types';
import { Icon } from './Icon';

interface ServiceModalProps {
  service: ServicePackage;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 text-blue-600 bg-blue-50 rounded-lg">
              <Icon name={service.icon} size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="text-sm font-medium text-slate-500">{service.priceRange}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 transition-colors rounded-full hover:bg-slate-100 hover:text-slate-600"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column: Structure & Features */}
            <div className="space-y-6">
              <section>
                <h4 className="flex items-center gap-2 mb-3 text-lg font-semibold text-slate-800">
                  <Icon name="LayoutTemplate" size={20} className="text-blue-500"/>
                  Struktur Halaman
                </h4>
                <ul className="space-y-2">
                  {service.details.structure.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 text-blue-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="flex items-center gap-2 mb-3 text-lg font-semibold text-slate-800">
                  <Icon name="CheckCircle2" size={20} className="text-emerald-500"/>
                  Fitur Unggulan
                </h4>
                <ul className="space-y-2">
                  {service.details.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <Icon name="CheckCircle2" size={16} className="mt-0.5 text-emerald-500 shrink-0"/>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Column: Technical & Content */}
            <div className="space-y-6">
              <section className="p-5 border border-blue-100 bg-blue-50/50 rounded-xl">
                <h4 className="flex items-center gap-2 mb-3 text-lg font-semibold text-slate-800">
                  <Icon name="Code2" size={20} className="text-blue-500"/>
                  Spesifikasi Teknis
                </h4>
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">Tech Stack</span>
                    <p className="text-sm text-slate-700">{service.details.techStack}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">Gaya Desain</span>
                    <p className="text-sm text-slate-700">{service.details.designStyle}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">Cara Edit</span>
                    <p className="text-sm text-slate-700">{service.details.editingGuide}</p>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="mb-3 text-sm font-semibold tracking-wider uppercase text-slate-500">
                  Contoh Konten (Dummy)
                </h4>
                <div className="space-y-2">
                   {service.details.dummyContent.map((item, idx) => (
                    <div key={idx} className="p-3 text-sm italic border-l-4 border-slate-200 bg-slate-50 text-slate-600">
                      "{item}"
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 p-6 border-t bg-slate-50 border-slate-100 rounded-b-2xl flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
          >
            Tutup
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
            <Icon name="Phone" size={16} />
            Pesan Paket Ini
          </button>
        </div>
      </div>
    </div>
  );
};