import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crbro-dark/90 backdrop-blur-sm border-b border-crbro-gold/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/isotype.svg"
            alt="CRBRO"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
        </Link>

        <div className="flex items-center gap-6 text-sm tracking-wider uppercase">
          <Link
            href="/credits"
            className="text-crbro-white/70 hover:text-crbro-gold transition-colors"
          >
            Credits
          </Link>
          <Link
            href="/about"
            className="text-crbro-white/70 hover:text-crbro-gold transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="ml-2 px-4 py-1.5 border border-crbro-gold text-crbro-gold rounded-sm text-xs font-heading tracking-widest hover:bg-crbro-gold hover:text-crbro-dark transition-all"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
