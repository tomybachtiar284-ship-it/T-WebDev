import React from 'react';
import { ServicePackage } from '../types';
import { Icon } from './Icon';

interface ServiceCardProps {
  service: ServicePackage;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col p-8 bg-white border border-slate-100 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 cursor-pointer overflow-hidden"
    >
      {/* Gradient border on hover using pseudo-element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-all duration-500">
        <Icon name={service.icon} size={120} className="text-blue-600 transform rotate-12 translate-x-8 -translate-y-8" />
      </div>

      <div className="flex items-center justify-center w-14 h-14 mb-6 text-blue-600 bg-blue-50 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-200">
        <Icon name={service.icon} size={28} />
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
        {service.title}
      </h3>
      
      <p className="flex-grow mb-6 text-sm leading-relaxed text-slate-600">
        {service.shortDescription}
      </p>

      <div className="pt-5 mt-auto border-t border-slate-100 group-hover:border-blue-50 transition-colors">
        <p className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1">Estimasi Harga</p>
        <p className="text-base font-bold text-slate-900">{service.priceRange}</p>
      </div>
      
      <div className="mt-6 flex items-center text-sm font-bold text-blue-600 group-hover:translate-x-2 transition-transform">
        Lihat Detail Paket
        <Icon name="ChevronRight" size={16} className="ml-1" />
      </div>
    </div>
  );
};