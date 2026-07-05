import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Credits",
  description: "Production credits for CRBRO",
};

const credits = [
  {
    title: "Relación (Remix)",
    artist: "Sech, ROSALÍA, Daddy Yankee, J Balvin, Farruko",
    role: "Producer",
    plays: "672,384,049",
    year: "2020",
    url: "https://open.spotify.com/track/35UUpTmrcFXNIVIN26ujXl",
    cover: "https://i.scdn.co/image/ab67616d0000b27363d74fcb3aaafe8c16e62f9b",
  },
  {
    title: "Borracho",
    artist: "Sech, DJ Khaled",
    role: "Producer",
    plays: "110,294,820",
    year: "2021",
    url: "https://open.spotify.com/track/0rsTDgGRlXKuzSAxcdb4Ns",
    cover: "https://i.scdn.co/image/ab67616d0000b273577954ad5b7c1a2ac94bc93d",
  },
  {
    title: "Sal y Perrea (Remix)",
    artist: "Sech, Daddy Yankee, J Balvin",
    role: "Producer",
    plays: "81,860,421",
    year: "2021",
    url: "https://open.spotify.com/track/1mG8VynhqySA52bALfYrvO",
    cover: "https://i.scdn.co/image/ab67616d0000b27387e771f79c7ba79013540139",
  },
  {
    title: "Duvibes",
    artist: "Sech",
    role: "Producer",
    plays: "19,270,860",
    year: "2021",
    url: "https://open.spotify.com/track/5CiWKzBkTveHezqY3TQmCW",
    cover: "https://i.scdn.co/image/ab67616d0000b273fe23dd528684203b1b2eb754",
  },
  {
    title: "RBD",
    artist: "BCA, Pinky, CRBRO",
    role: "Artist / Producer",
    plays: "47,869",
    year: "2024",
    url: "https://open.spotify.com/track/27RSJHEA99Y0Vsow7nA37A",
    cover: "https://i.scdn.co/image/ab67616d0000b273021e2681a93b574df970b63d",
  },
];

export default function CreditsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading text-crbro-white mb-2">Credits</h1>
          <p className="text-sm text-crbro-white/50 mb-10 max-w-xl">
            Every credit links to the real record. A producer credit is a claim until there's a play button next to it.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {credits.map((credit) => (
              <a
                key={credit.title}
                href={credit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative w-full aspect-square rounded-sm overflow-hidden mb-3">
                  <Image
                    src={credit.cover}
                    alt={credit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40">
                    <div className="w-14 h-14 rounded-full bg-crbro-gold flex items-center justify-center shadow-[0_0_20px_rgba(170,116,68,0.5)]">
                      <svg className="w-6 h-6 text-crbro-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-heading text-base text-crbro-white tracking-wider uppercase group-hover:text-crbro-gold transition-colors">
                  {credit.title}
                </h3>
                <p className="text-xs text-crbro-white/60 mt-0.5">
                  {credit.artist}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-crbro-gold/70 font-heading">
                    {credit.role}
                  </span>
                  <span className="text-[10px] text-crbro-white/30">·</span>
                  <span className="text-[10px] text-crbro-white/40">
                    {credit.year} · {credit.plays} streams
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
