"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq">
      <Container className="py-28">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with Framevolve."
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">{faq.question}</span>

                <span className="text-2xl">{open === index ? "−" : "+"}</span>
              </button>

              {open === index && (
                <div className="border-t border-white/10 px-6 py-5 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
