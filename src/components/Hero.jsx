import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top gradient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Every Car. Every Detail. Fully Alive.
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Explore a living catalog of world cars with dynamic systems — radios, tires, lighting, and more — all simulated and ready to experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#models" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-gray-100 transition">
              Browse Models
            </a>
            <a href="#features" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:border-white/40 transition">
              See Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
