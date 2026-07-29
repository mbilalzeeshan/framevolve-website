import { services } from "@/lib/data/services";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function Services() {
  return (
    <section id="services">
      <Container className="py-24">
        <SectionHeading
          badge="Our Services"
          title="Everything You Need"
          description="We help real estate professionals stand out with modern digital experiences."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.id}>
              <h3 className="text-2xl font-semibold">{service.title}</h3>

              <p className="mt-4 text-gray-400">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
