import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Framevolve</h2>

            <p className="mt-2 text-gray-400">
              Motion Graphics • 3D Walkthroughs • Websites • AI Automations
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#services">Services</a>
            <a href="#portfolio">Projects</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Framevolve. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
