import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DjSetCard } from "@/components/dj-set-card";
import { HeroBgTiles } from "@/components/hero-bg-tiles";
import { SITE_DESCRIPTION } from "./seo";

export const metadata: Metadata = {
  title: {
    absolute: "CRBRO",
  },
  description: SITE_DESCRIPTION,
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
];

const singles = [
  {
    title: "RBD",
    artists: "BCA, Pinky, CRBRO",
    year: "2024",
    url: "https://open.spotify.com/track/27RSJHEA99Y0Vsow7nA37A",
    cover: "https://i.scdn.co/image/ab67616d0000b273021e2681a93b574df970b63d",
    plays: "47,869",
  },
  {
    title: "UNA PA TI Y UNA PA ELLAS",
    artists: "CRBRO",
    year: "2024",
    url: "https://open.spotify.com/album/7a98knqRQ6xP5lBIY9r9z0",
    cover: "https://i.scdn.co/image/ab67616d0000b273d9d7c56dce5ab2d81cf7af14",
    plays: "",
  },
  {
    title: "PLAY",
    artists: "BCA, CRBRO",
    year: "2024",
    url: "https://open.spotify.com/track/0rsTDgGRlXKuzSAxcdb4Ns",
    cover: "https://i.scdn.co/image/ab67616d0000b2739aa5a3c8e0a3278795120003",
    plays: "43,459",
  },
  {
    title: "CUANDO PUEDAS LA ESCUCHAS",
    artists: "BCA, CRBRO",
    year: "2024",
    url: "https://open.spotify.com/track/7jHq575EOkqnrxBajvNVf2",
    cover: "https://i.scdn.co/image/ab67616d0000b2730341cbd3b430b40f886bc8c9",
    plays: "16,409",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative flex flex-col items-center justify-center px-4 text-center overflow-hidden"
          style={{ minHeight: "85vh" }}
        >
          <HeroBgTiles />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(170,116,68,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Wordmark — cleaned SVG logo */}
          <div className="mb-8 animate-wordmark">
            <Image
              src="/images/wordmark.svg"
              alt="CRBRO"
              width={760}
              height={390}
              className="w-full max-w-[400px] sm:max-w-[550px] mx-auto h-auto"
              priority
            />
          </div>

            <p className="text-base sm:text-lg text-crbro-gold font-heading tracking-[0.4em] uppercase mb-10 animate-tagline">
              Heard worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-ctas">
              <a
                href="https://open.spotify.com/artist/6guLWnvW76oTo4AdSIMBFe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-crbro-gold text-crbro-dark font-heading text-sm tracking-widest uppercase rounded-sm transition-all hover:bg-crbro-gold/90 hover:shadow-[0_0_20px_rgba(170,116,68,0.4)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Listen on Spotify
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-crbro-gold/50 text-crbro-gold font-heading text-sm tracking-widest uppercase rounded-sm transition-all hover:bg-crbro-gold/10 hover:border-crbro-gold hover:shadow-[0_0_20px_rgba(170,116,68,0.2)]"
              >
                Work with me
              </Link>
            </div>

        {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-scroll-indicator">
            <span className="text-[10px] tracking-[0.25em] uppercase text-crbro-gold/50 font-heading">
              scroll
            </span>
            <svg
              className="w-4 h-4 text-crbro-gold/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* Credits — editorial feature layout */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="font-heading text-2xl sm:text-3xl text-crbro-white tracking-widest uppercase">
                Production Credits
              </h2>
              <p className="text-sm text-crbro-white/40 mt-2 max-w-lg">
                Records shaped for some of the biggest names in Latin music. Over 860M streams across these credits alone.
              </p>
            </div>

            <div className="space-y-16">
              {credits.map((credit, i) => (
                <a
                  key={credit.title}
                  href={credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-10 items-center`}
                >
                  {/* Cover art */}
                  <div className="relative w-full max-w-xs md:max-w-sm aspect-square rounded-sm overflow-hidden flex-shrink-0">
                    <Image
                      src={credit.cover}
                      alt={credit.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <div className="w-16 h-16 rounded-full bg-crbro-gold flex items-center justify-center shadow-[0_0_30px_rgba(170,116,68,0.6)]">
                        <svg className="w-7 h-7 text-crbro-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`flex-1 text-center ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-crbro-gold/60 font-heading">
                      {credit.role}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-crbro-white mt-2 leading-tight group-hover:text-crbro-gold transition-colors">
                      {credit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-crbro-white/70 mt-1.5 font-medium">
                      {credit.artist}
                    </p>
                    <div className={`flex items-center gap-3 mt-3 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"} justify-center`}>
                      <span className="text-xs text-crbro-white/50">{credit.year}</span>
                      <span className="w-1 h-1 rounded-full bg-crbro-gold/40" />
                      <span className="text-sm font-heading text-crbro-gold/90 tracking-wider">
                        {parseInt(credit.plays.replace(/,/g, "")).toLocaleString()} streams
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <DjSetCard />
        </div>

        {/* Singles — clean grid on lifted background */}
        <section className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(180deg, #2F170E 0%, #3D2416 100%)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="font-heading text-xl sm:text-2xl text-crbro-white tracking-widest uppercase">
                Singles
              </h2>
              <p className="text-xs text-crbro-white/40 mt-1">Own releases</p>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 snap-x snap-mandatory sm:snap-none scrollbar-none">
              {singles.map((single) => (
                <a
                  key={single.title}
                  href={single.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-44 sm:w-auto snap-start"
                >
                  <div className="relative w-full aspect-square rounded-sm overflow-hidden mb-3">
                    <Image
                      src={single.cover}
                      alt={single.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                      <div className="w-12 h-12 rounded-full bg-crbro-gold flex items-center justify-center shadow-[0_0_20px_rgba(170,116,68,0.5)]">
                        <svg className="w-5 h-5 text-crbro-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-heading text-sm text-crbro-white tracking-wider uppercase group-hover:text-crbro-gold transition-colors truncate">
                    {single.title}
                  </h3>
                  <p className="text-xs text-crbro-white/40 mt-0.5 truncate">
                    {single.artists} · {single.year}
                    {single.plays ? ` · ${parseInt(single.plays.replace(/,/g, "")).toLocaleString()} streams` : ""}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center sm:text-left">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-crbro-gold/50 text-crbro-gold font-heading text-sm tracking-widest uppercase rounded-sm transition-all hover:bg-crbro-gold/10 hover:border-crbro-gold hover:shadow-[0_0_20px_rgba(170,116,68,0.2)]"
              >
                Work with me
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
