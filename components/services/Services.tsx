import { services } from "@/lib/data/services";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-5xl font-bold">What We Do</h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
        Everything you need to market properties and grow your business.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-indigo-500 hover:bg-white/10"
          >
            <h3 className="text-2xl font-semibold">{service.title}</h3>

            <p className="mt-4 text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
