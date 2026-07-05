import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CRBRO",
};

const inquiryTypes = [
  "Booking / Session",
  "Sync / Licensing",
  "Press",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading text-crbro-white mb-2">
            Contact
          </h1>
          <p className="text-sm text-crbro-white/50 mb-10 max-w-xl">
            Tell me what you&apos;re working on. I&apos;ll get back to you within 48&nbsp;hours.
          </p>

          <ContactForm inquiryTypes={inquiryTypes} />

          <div className="mt-12 pt-8 border-t border-crbro-gold/10">
            <p className="text-xs tracking-widest uppercase text-crbro-white/40 mb-3 font-heading">
              Follow
            </p>
            <div className="flex items-center gap-5 text-sm">
              <a
                href="https://open.spotify.com/artist/6guLWnvW76oTo4AdSIMBFe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crbro-white/50 hover:text-crbro-gold transition-colors"
              >
                Spotify
              </a>
              <a
                href="https://www.instagram.com/crbro_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crbro-white/50 hover:text-crbro-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@Crbromusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crbro-white/50 hover:text-crbro-gold transition-colors"
              >
                YouTube
              </a>
              <span className="text-crbro-white/20">·</span>
              <a
                href="mailto:crbrobooking@gmail.com"
                className="text-crbro-white/50 hover:text-crbro-gold transition-colors"
              >
                crbrobooking@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
