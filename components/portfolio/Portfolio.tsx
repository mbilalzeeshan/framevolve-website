import Image from "next/image";
import { portfolio } from "@/lib/data/portfolio";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Container className="py-24">
        <SectionHeading
          badge="Our Work"
          title="Featured Projects"
          description="Explore a selection of our motion graphics, 3D walkthroughs, and web development projects."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {portfolio.map((project) => (
            <Card key={project.id}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <p className="mt-6 text-sm text-indigo-400">{project.category}</p>

              <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>

              <div className="mt-6">
                <Button variant="outline">View Project</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
