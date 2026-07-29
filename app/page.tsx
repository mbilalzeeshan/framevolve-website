import Navbar from "@/components/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold text-center">
          Transform Listings
          <br />
          Into Experiences.
        </h1>

        <p className="mt-8 max-w-2xl text-center text-lg text-gray-400">
          Motion Graphics • 3D Walkthroughs • Website Development • AI
          Automations
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="rounded-full bg-white text-black px-8 py-3 font-semibold hover:scale-105 transition-transform">
            Book Free Consultation
          </button>

          <button className="rounded-full border border-white/20 px-8 py-3 hover:bg-white/10 transition">
            View Portfolio
          </button>
        </div>
      </main>
    </>
  );
}
