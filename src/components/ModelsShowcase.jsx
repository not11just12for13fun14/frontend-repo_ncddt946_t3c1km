import { useEffect, useState } from 'react';

const demoModels = [
  {
    name: 'Apex GT-R',
    year: 2025,
    type: 'ICE',
    power: '612 hp',
    color: 'from-neutral-800 to-neutral-900',
  },
  {
    name: 'Volt S',
    year: 2024,
    type: 'EV',
    power: '510 hp',
    color: 'from-slate-800 to-slate-900',
  },
  {
    name: 'Hybrid R-Line',
    year: 2023,
    type: 'Hybrid',
    power: '430 hp',
    color: 'from-zinc-800 to-zinc-900',
  },
];

export default function ModelsShowcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="models" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Signature Models</h2>
            <p className="mt-3 text-gray-300">A glimpse at the diversity of platforms supported.</p>
          </div>
          <a href="#cta" className="hidden md:inline-flex rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/40">See full library</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoModels.map((m) => (
            <div key={m.name} className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br p-6 relative transition-transform hover:-translate-y-1 "
                 style={{
                   backgroundImage: undefined,
                 }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-60`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-gray-300">{m.type}</span>
                  <span className="text-xs text-gray-400">{m.year}</span>
                </div>
                <h3 className="mt-2 text-xl font-medium">{m.name}</h3>
                <p className="mt-1 text-sm text-gray-300">{m.power}</p>
                <div className="mt-6 flex gap-2">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-gray-200">Radio</span>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-gray-200">Tires</span>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-gray-200">Lighting</span>
                </div>
              </div>
              <div className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.2),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)]`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
