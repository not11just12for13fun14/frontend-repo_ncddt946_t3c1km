export default function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-neutral-950 to-black py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to test drive the future?</h2>
        <p className="mt-4 text-gray-300">Jump into a fully interactive environment where every component responds like the real thing.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="rounded-full bg-red-600/90 hover:bg-red-600 px-6 py-3 text-sm font-medium">Launch Live Demo</a>
          <a href="#features" className="rounded-full border border-white/20 hover:border-white/40 px-6 py-3 text-sm">Learn more</a>
        </div>
        <p className="mt-6 text-xs text-gray-500">The 3D scene above is interactive — click and drag to explore the car.</p>
      </div>
    </section>
  );
}
