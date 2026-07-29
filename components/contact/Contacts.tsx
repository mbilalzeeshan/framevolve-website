import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/lib/data/contact";

export default function Contact() {
  return (
    <section id="contact">
      <Container className="py-28">
        <SectionHeading
          badge="Contact Us"
          title="Let's Build Something Amazing"
          description="Tell us about your property or project and we'll get back to you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              placeholder="Company"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <Button>Send Message</Button>
          </form>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Get in Touch</h3>

              <p className="mt-4 text-gray-400">
                Whether you need cinematic property videos, a website, or AI
                automations, we're here to help.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-400">{contactInfo.email}</p>
            </div>

            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-400">{contactInfo.phone}</p>
            </div>

            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-400">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
