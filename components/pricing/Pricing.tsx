import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { pricing } from "@/lib/data/pricing";

export default function Pricing() {
  return (
    <section id="pricing">
      <Container className="py-28">
        <SectionHeading
          badge="Pricing"
          title="Simple Pricing"
          description="Choose the package that fits your marketing goals."
        />

        <div className="grid gap-8 lg:grid-cols-4">
          {pricing.map((plan) => (
            <Card key={plan.title}>
              {plan.popular && (
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm">
                  Most Popular
                </span>
              )}

              <h3 className="mt-6 text-3xl font-bold">{plan.title}</h3>

              <p className="mt-3 text-5xl font-black">${plan.price}</p>

              <p className="mt-2 text-gray-400">
                {plan.videos} Video{plan.videos > 1 ? "s" : ""}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <div className="mt-10">
                <Button>Get Started</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
