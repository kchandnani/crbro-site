"use client";

import { useState } from "react";
import Image from "next/image";

export function DjSetCard() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="my-16">
        <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black">
          <iframe
            src="https://www.youtube.com/embed/U9kkoub2lAQ?autoplay=1"
            title="CRBRO | BrunchCast at Lust x 999"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="mt-3">
          <h3 className="font-heading text-base text-crbro-white tracking-wider uppercase">
            BrunchCast at Lust x 999
          </h3>
          <p className="text-xs text-crbro-white/40 mt-0.5">CVS Mix</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-16">
      <button
        onClick={() => setPlaying(true)}
        className="relative w-full aspect-video rounded-sm overflow-hidden group cursor-pointer text-left block"
      >
        <Image
          src="/images/dj-sets/img_f86adbcf6551.jpg"
          alt="CVS Mix"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-crbro-gold flex items-center justify-center shadow-[0_0_30px_rgba(170,116,68,0.6)] transition-transform group-hover:scale-110">
            <svg className="w-7 h-7 text-crbro-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="font-heading text-lg text-crbro-white tracking-wider uppercase drop-shadow-lg">
            BrunchCast at Lust x 999
          </h3>
          <p className="text-xs text-crbro-white/70 mt-0.5 drop-shadow">CVS Mix</p>
        </div>
      </button>
    </div>
  );
}
