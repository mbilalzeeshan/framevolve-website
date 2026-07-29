import { featuredProject } from "@/lib/data/portfolio";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ImageGallery from "./ImageGallery";

export default function FeaturedProject() {
  return (
    <section
      id="portfolio"
      className="border-y border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <Container className="py-28">
        <SectionHeading
          badge="Featured Project"
          title={featuredProject.title}
          description={featuredProject.description}
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side - Gallery */}
          <ImageGallery
            images={featuredProject.images}
            title={featuredProject.title}
          />

          {/* Right Side - Details */}
          <div>
            <Badge text={featuredProject.status} />

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              {featuredProject.title}
            </h2>

            <p className="mt-2 text-lg text-indigo-400">
              📍 {featuredProject.location}
            </p>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              {featuredProject.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {featuredProject.services.map((service) => (
                <Badge key={service} text={service} />
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button>Request Similar Project</Button>

              <Button variant="outline">3D Walkthrough Coming Soon</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
