
import React from 'react';
import { SECTIONS } from '../constants';

interface SidebarProps {
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 hidden lg:flex flex-col">
      <div className="p-6 border-b border-slate-100 flex items-center gap-3">
        <div className="w-9 h-9 bg-[#FF041D] rounded-xl flex items-center justify-center text-white font-bold shadow-sm shadow-red-100">D</div>
        <h1 className="font-bold text-xl tracking-tight text-slate-800">Dashcom UI</h1>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeSection === section.id 
                ? 'bg-red-50 text-[#FF041D] shadow-sm shadow-red-50/50' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {section.title}
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-100 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
        Version 1.0.0
      </div>
    </aside>
  );
};

export const SectionWrapper: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => {
  return (
    <section id={id} className="mb-24 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <div className="flex-1 h-[1px] bg-slate-200"></div>
      </div>
      {children}
    </section>
  );
};

export const SubSection: React.FC<{ title: string; description?: string; children: React.ReactNode }> = ({ title, description, children }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      {description && <p className="text-slate-500 mb-6 text-sm">{description}</p>}
      <div className="bg-white rounded-[2rem] border border-slate-200 p-8 lg:p-10 shadow-sm">
        {children}
      </div>
    </div>
  );
};
