import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-crbro-gold/10 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-crbro-white/50">
          <div className="flex items-center gap-4">
            <a
              href="https://open.spotify.com/artist/6guLWnvW76oTo4AdSIMBFe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-crbro-gold transition-colors"
            >
              Spotify
            </a>
            <a
              href="https://www.instagram.com/crbro_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-crbro-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@Crbromusic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-crbro-gold transition-colors"
            >
              YouTube
            </a>
          </div>
          <div className="text-center sm:text-right">
            <p>&copy; {new Date().getFullYear()} CRBRO. All rights reserved.</p>
            <Link href="/contact" className="hover:text-crbro-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
