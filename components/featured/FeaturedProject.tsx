import Image from "next/image";
import { featuredProject } from "@/lib/data/portfolio";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function FeaturedProject() {
  return (
    <section id="portfolio">
      <Container className="py-24">
        <SectionHeading
          badge="Featured Project"
          title={featuredProject.title}
          description={featuredProject.description}
        />

        <div className="mb-12 flex flex-wrap gap-3">
          <Badge text={featuredProject.status} />

          {featuredProject.services.map((service) => (
            <Badge key={service} text={service} />
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProject.images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`${featuredProject.title} ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">3D Walkthrough Coming Soon</Button>
        </div>
      </Container>
    </section>
  );
}
