"use client";

const stats = [
  {
    number: "500+",
    label: "Videos Created",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "24h",
    label: "Average Response",
  },
  {
    number: "15+",
    label: "Countries",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-zinc-950 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <h2 className="text-4xl font-bold">{item.number}</h2>

            <p className="mt-2 text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
