import { Radio, Gauge, Zap, SteeringWheel } from 'lucide-react';

const features = [
  {
    icon: SteeringWheel,
    title: 'True-to-Life Handling',
    desc: 'Experience precise steering dynamics, traction control, and suspension feedback tuned per model.'
  },
  {
    icon: Radio,
    title: 'Interactive Cabin',
    desc: 'Functional infotainment: radio stations, media controls, ambient lighting, and climate presets.'
  },
  {
    icon: Gauge,
    title: 'Performance Telemetry',
    desc: 'Realtime speed, RPM, tire temperature, and brake wear with configurable HUD overlays.'
  },
  {
    icon: Zap,
    title: 'Dynamic Systems',
    desc: 'Working tires, lights, aero, and powertrains across ICE, hybrid, and EV platforms.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built To Feel Real</h2>
          <p className="mt-3 text-gray-300">Every model includes functional systems so you can explore how cars behave in the real world.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Icon className="h-6 w-6 text-red-500" />
              <h3 className="mt-4 font-medium text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
