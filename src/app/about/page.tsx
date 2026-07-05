import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_DESCRIPTION } from "@/app/seo";

export const metadata: Metadata = {
  title: "About",
  description: SITE_DESCRIPTION,
};

const services = [
  "Production",
  "DJ Sets",
  "Studio Sessions",
  "Creative Direction",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading text-crbro-white mb-6">About</h1>

          <div className="space-y-5 text-base sm:text-lg text-crbro-white/80 leading-relaxed">
            <p>
              CRBRO is a Panamanian producer and engineer behind some of the biggest
              records in Latin music. From Panama to Miami, his production and creative
              direction have shaped tracks for Sech, Rosalía, J Balvin, Daddy Yankee,
              Farruko, and Wisin & Yandel — work that's crossed 1.4 billion streams
              and views worldwide.
            </p>
            <p>
              He started making music young and the goal hasn't changed: records that
              feel cinematic, land on the first listen, and travel past borders. Panama
              first, heard everywhere.
            </p>
          </div>

          {/* Services */}
          <div className="mt-12 border-t border-crbro-gold/10 pt-8">
            <h2 className="text-xs tracking-widest uppercase text-crbro-gold/50 mb-4 font-heading">Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {services.map((s) => (
                <div
                  key={s}
                  className="px-4 py-3 bg-crbro-medium/20 border border-crbro-gold/10 rounded-sm text-sm text-crbro-white/70 text-center"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-crbro-gold/50 text-crbro-gold font-heading text-sm tracking-widest uppercase rounded-sm hover:bg-crbro-gold/10 transition-all"
            >
              Work with me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
