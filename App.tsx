
import React, { useState, useEffect } from 'react';
import { Sidebar, SectionWrapper, SubSection } from './components/Layout';
import { Button, Input, Badge, Icon, IconName } from './components/UIComponents';
import { SECTIONS, COLORS } from './constants';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

const dummyData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('fundamentals');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} />
      
      <main className="flex-1 p-6 lg:p-14 max-w-7xl mx-auto">
        {/* Header Hero */}
        <header className="mb-24 text-center">
          <Badge variant="primary" icon="info">UI Kit Version 1.0.0</Badge>
          <h1 className="text-5xl font-black text-slate-900 mt-6 mb-4 tracking-tight">Dashcom UI Dashboard Kit</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A comprehensive, battle-tested design system library built with <span className="text-[#FF041D] font-black">#FF041D</span> and ultra-rounded aesthetics.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button size="lg" icon="folder" className="rounded-full shadow-2xl shadow-red-200">Download for Figma</Button>
            <Button variant="outline" size="lg" icon="settings" className="rounded-full">Documentation</Button>
          </div>
        </header>

        {/* 1. Fundamentals */}
        <SectionWrapper id="fundamentals" title="1. Design Fundamentals">
          <SubSection title="Core Palette" description="The primary red defines the brand identity. Neutrals and secondaries are selected for high contrast.">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {Object.entries(COLORS.primary).map(([key, value]) => (
                <div key={key} className="space-y-3">
                  <div className="h-24 w-full rounded-[2rem] shadow-sm" style={{ backgroundColor: value }}></div>
                  <div className="flex flex-col text-center">
                    <span className="text-xs font-bold text-slate-900">Primary {key}</span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">{value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
              <div className="space-y-3">
                <div className="h-24 w-full rounded-[2rem] bg-emerald-500 shadow-sm"></div>
                <div className="text-center flex flex-col"><span className="text-xs font-bold">Success</span><span className="text-[10px] text-slate-400 font-mono uppercase">#10B981</span></div>
              </div>
              <div className="space-y-3">
                <div className="h-24 w-full rounded-[2rem] bg-rose-700 shadow-sm"></div>
                <div className="text-center flex flex-col"><span className="text-xs font-bold">Error</span><span className="text-[10px] text-slate-400 font-mono uppercase">#991B1B</span></div>
              </div>
              <div className="space-y-3">
                <div className="h-24 w-full rounded-[2rem] bg-amber-500 shadow-sm"></div>
                <div className="text-center flex flex-col"><span className="text-xs font-bold">Warning</span><span className="text-[10px] text-slate-400 font-mono uppercase">#F59E0B</span></div>
              </div>
              <div className="space-y-3">
                <div className="h-24 w-full rounded-[2rem] bg-sky-500 shadow-sm"></div>
                <div className="text-center flex flex-col"><span className="text-xs font-bold">Info</span><span className="text-[10px] text-slate-400 font-mono uppercase">#3B82F6</span></div>
              </div>
              <div className="space-y-3">
                <div className="h-24 w-full rounded-[2rem] bg-slate-900 shadow-sm"></div>
                <div className="text-center flex flex-col"><span className="text-xs font-bold">Contrast</span><span className="text-[10px] text-slate-400 font-mono uppercase">#0F172A</span></div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Typography Scale" description="Hierarchical text styles optimized for clarity against soft, rounded elements.">
            <div className="space-y-8">
              <div className="flex items-end gap-6 border-b border-slate-100 pb-4">
                <span className="text-6xl font-black text-slate-900 tracking-tight">H1 Header</span>
                <span className="text-xs text-slate-400 font-mono mb-2">Inter Black / 60px</span>
              </div>
              <div className="flex items-end gap-6 border-b border-slate-100 pb-4">
                <span className="text-4xl font-bold text-slate-800 tracking-tight">H2 Secondary Header</span>
                <span className="text-xs text-slate-400 font-mono mb-2">Inter Bold / 36px</span>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Body Large: Our modern design system focuses on organic shapes and user intent. This red-driven kit ensures important actions are approachable yet authoritative.
              </p>
            </div>
          </SubSection>
        </SectionWrapper>

        {/* 2. Basic Components */}
        <SectionWrapper id="basic" title="2. Basic Components">
          <SubSection title="Button Matrix">
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button>Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-8">
              <Button variant="primary" icon="plus">Primary Icon</Button>
              <Button variant="secondary" icon="settings">Secondary</Button>
              <Button variant="outline" icon="mail">Outline</Button>
              <Button variant="ghost" icon="trash">Ghost</Button>
              <Button variant="danger" icon="alert">Danger</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-8">
              <Button loading className="rounded-full">Loading...</Button>
              <Button disabled icon="close" className="rounded-full">Disabled</Button>
              <Button className="rounded-full shadow-lg" icon="refresh" iconPosition="right">Refresh Data</Button>
            </div>
          </SubSection>

          <SubSection title="Form Controls">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <Input label="Email Address" placeholder="name@company.com" leadingIcon="mail" />
                <Input label="Search" placeholder="Type to find..." leadingIcon="search" />
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="w-6 h-6 rounded-lg border-slate-300 text-[#FF041D] focus:ring-red-500 transition-all cursor-pointer" defaultChecked />
                  <span className="text-sm font-semibold text-slate-700">Accept Terms</span>
                </div>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="radio" name="demo-radio" className="w-5 h-5 text-[#FF041D] focus:ring-red-500 cursor-pointer" defaultChecked />
                    <span className="text-sm font-medium group-hover:text-slate-900 transition-colors">Enabled</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="radio" name="demo-radio" className="w-5 h-5 text-[#FF041D] focus:ring-red-500 cursor-pointer" />
                    <span className="text-sm font-medium group-hover:text-slate-900 transition-colors">Disabled</span>
                  </label>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF041D]"></div>
                  <span className="ml-4 text-sm font-semibold text-slate-700">Push Notifications</span>
                </label>
              </div>
            </div>
          </SubSection>
        </SectionWrapper>

        {/* 3. Navigation */}
        <SectionWrapper id="navigation" title="3. Navigation">
          <SubSection title="Tabs & Breadcrumbs">
            <div className="flex items-center gap-3 mb-10 bg-slate-50 p-1.5 rounded-[1.5rem] w-fit border border-slate-100 shadow-sm">
              <button className="px-5 py-2.5 bg-white text-[#FF041D] rounded-2xl shadow-sm font-bold text-sm flex items-center gap-2">
                <Icon name="home" size={16} /> Overview
              </button>
              <button className="px-5 py-2.5 text-slate-500 font-semibold text-sm hover:bg-white/50 hover:text-slate-700 rounded-2xl transition-all flex items-center gap-2">
                <Icon name="chart" size={16} /> Performance
              </button>
              <button className="px-5 py-2.5 text-slate-500 font-semibold text-sm hover:bg-white/50 hover:text-slate-700 rounded-2xl transition-all flex items-center gap-2">
                <Icon name="users" size={16} /> Audience
              </button>
            </div>
            
            <nav className="flex text-sm font-semibold text-slate-500 mb-10" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li className="inline-flex items-center"><a href="#" className="hover:text-[#FF041D] transition-colors">Home</a></li>
                <li><div className="flex items-center"><Icon name="chevron-right" size={14} className="mx-2 text-slate-300" /><a href="#" className="hover:text-[#FF041D] transition-colors">Dashboard</a></div></li>
                <li aria-current="page"><div className="flex items-center"><Icon name="chevron-right" size={14} className="mx-2 text-slate-300" /><span className="text-slate-400">Analytics</span></div></li>
              </ol>
            </nav>

            <div className="flex gap-3">
              <Button size="sm" variant="outline" icon="chevron-left" className="rounded-full" />
              <Button size="sm" variant="primary" className="rounded-full min-w-[40px]">1</Button>
              <Button size="sm" variant="outline" className="rounded-full min-w-[40px]">2</Button>
              <Button size="sm" variant="outline" className="rounded-full min-w-[40px]">3</Button>
              <span className="flex items-center px-2 text-slate-400">...</span>
              <Button size="sm" variant="outline" icon="chevron-right" iconPosition="right" className="rounded-full" />
            </div>
          </SubSection>
        </SectionWrapper>

        {/* 4. Feedback */}
        <SectionWrapper id="feedback" title="4. Feedback & Indicators">
          <SubSection title="Alerts & Notifications">
            <div className="space-y-5">
              <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-[2rem] flex gap-4 items-center">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                  <Icon name="check" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">System Ready</h4>
                  <p className="text-xs text-emerald-700 font-medium">The ultra-rounded primary red theme has been deployed globally.</p>
                </div>
              </div>
              <div className="p-5 bg-red-50 border border-red-100 rounded-[2rem] flex gap-4 items-center">
                <div className="w-10 h-10 rounded-2xl bg-[#FF041D] flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                  <Icon name="alert" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-red-900">Critical Update</h4>
                  <p className="text-xs text-red-700 font-medium">A new security patch is available for your account. Please review.</p>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Progress & Loaders">
            <div className="space-y-10">
              <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden p-1 border border-slate-200 shadow-inner">
                <div className="bg-[#FF041D] h-full rounded-full shadow-lg shadow-red-500/30" style={{ width: '65%' }}></div>
              </div>
              <div className="flex items-center gap-16">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-100" strokeWidth="4" />
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-[#FF041D]" strokeWidth="4" strokeDasharray="75, 100" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-black text-slate-800">75%</span>
                  </div>
                </div>
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-slate-100 border-t-[#FF041D]"></div>
              </div>
            </div>
          </SubSection>
        </SectionWrapper>

        {/* 5. Content */}
        <SectionWrapper id="content" title="5. Content & Data">
          <SubSection title="Statistic Cards">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-red-50 text-[#FF041D] rounded-[1.25rem] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <Icon name="credit-card" size={24} />
                  </div>
                  <Badge variant="success" icon="plus">12%</Badge>
                </div>
                <p className="text-sm font-bold text-slate-500 mb-1">Gross Sales</p>
                <p className="text-3xl font-black text-slate-900 tracking-tight">$82,456</p>
              </div>
              <div className="p-8 bg-[#FF041D] text-white rounded-[2.5rem] shadow-2xl shadow-red-500/20 hover:scale-[1.02] transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-[1.25rem] flex items-center justify-center backdrop-blur-md group-hover:rotate-6 transition-transform">
                    <Icon name="chart" size={24} />
                  </div>
                  <span className="text-[10px] bg-white/30 px-3 py-1 rounded-full font-black uppercase tracking-widest">Trending</span>
                </div>
                <p className="text-sm font-bold opacity-80 mb-1">Peak Conversion</p>
                <p className="text-3xl font-black tracking-tight">18.2%</p>
              </div>
              <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl shadow-slate-900/20 hover:scale-[1.02] transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-[1.25rem] flex items-center justify-center backdrop-blur-md">
                    <Icon name="settings" size={24} />
                  </div>
                  <Badge variant="primary" className="bg-red-500/20 border-red-500/30 text-white">Active</Badge>
                </div>
                <p className="text-sm font-bold opacity-80 mb-1">Server Uptime</p>
                <p className="text-3xl font-black tracking-tight">99.9%</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Visual Analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-[350px]">
              <div className="w-full h-full bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100">
                <p className="text-sm font-black text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-tighter">
                  <Icon name="chart" size={18} className="text-[#FF041D]" /> Sales Volume
                </p>
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart data={dummyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 700 }} />
                    <Tooltip cursor={{ fill: '#fef2f2', radius: 10 }} contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }} />
                    <Bar dataKey="value" fill="#FF041D" radius={[10, 10, 10, 10]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full h-full bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100">
                <p className="text-sm font-black text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-tighter">
                  <Icon name="chart" size={18} className="text-[#FF041D]" /> Growth Trajectory
                </p>
                <ResponsiveContainer width="100%" height="80%">
                  <AreaChart data={dummyData}>
                    <defs>
                      <linearGradient id="colorValueRed" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF041D" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#FF041D" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="value" stroke="#FF041D" strokeWidth={4} fillOpacity={1} fill="url(#colorValueRed)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </SubSection>
        </SectionWrapper>

        {/* 7. Icons */}
        <SectionWrapper id="icons" title="7. Icons & Illustrations">
          <SubSection title="Minimalist Icon Gallery" description="Highly rounded icon containers for a playful yet functional aesthetic.">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
              {(['home', 'chart', 'users', 'settings', 'bell', 'mail', 'search', 'plus', 'trash', 'edit', 'save', 'refresh', 'chevron-left', 'chevron-right', 'folder', 'credit-card', 'message', 'calendar', 'check', 'alert', 'info', 'close'] as IconName[]).map((name) => (
                <div key={name} className="flex flex-col items-center gap-4 p-5 border border-slate-100 rounded-[2rem] bg-slate-50/30 hover:bg-red-50 transition-all group cursor-pointer shadow-sm hover:shadow-md">
                  <Icon name={name} size={28} className="group-hover:text-[#FF041D] group-hover:scale-110 transition-all" />
                  <span className="text-[10px] text-slate-400 font-bold text-center uppercase tracking-widest leading-none">{name}</span>
                </div>
              ))}
            </div>
          </SubSection>
          <SubSection title="Empty States">
             <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-28 h-28 bg-red-50 text-[#FF041D] rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
                  <Icon name="search" size={56} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Zero Results Found</h4>
                <p className="text-slate-500 max-w-xs mb-8 text-sm font-medium">We couldn't find anything matching your search. Maybe try a broader term or check your filters?</p>
                <Button variant="outline" icon="refresh" className="rounded-full px-10">Reset Filters</Button>
             </div>
          </SubSection>
        </SectionWrapper>

        {/* Footer */}
        <footer className="mt-24 py-16 border-t border-slate-200 text-center bg-white rounded-[3rem] mb-12 shadow-sm">
          <div className="flex justify-center gap-8 mb-8">
             <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-[#FF041D] transition-all cursor-pointer shadow-sm">
               <Icon name="mail" size={22} />
             </div>
             <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-[#FF041D] transition-all cursor-pointer shadow-sm">
               <Icon name="message" size={22} />
             </div>
             <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-[#FF041D] transition-all cursor-pointer shadow-sm">
               <Icon name="users" size={22} />
             </div>
          </div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">© 2024 Dashcom UI Kit</p>
          <p className="text-slate-300 text-[10px] mt-2 font-medium">Soft shapes. Precise engineering. Redefined UI.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
