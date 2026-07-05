interface CreditProps {
  title: string;
  artist: string;
  role: string;
  plays?: string;
  coverUrl?: string;
  spotifyUrl: string;
  featured?: boolean;
}

export function CreditCard({ title, artist, role, plays, coverUrl, spotifyUrl, featured = false }: CreditProps) {
  if (featured) {
    return (
      <a
        href={spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-crbro-medium/40 rounded-sm border border-crbro-gold/10 overflow-hidden hover:border-crbro-gold/40 transition-all"
      >
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-48 flex-shrink-0 aspect-square sm:aspect-auto sm:h-48 bg-crbro-dark overflow-hidden">
            {coverUrl ? (
              <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-crbro-medium/60">
                <div className="w-16 h-16 rounded-full bg-crbro-gold/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-crbro-gold ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 p-6 flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-crbro-gold/60 mb-1">{role}</p>
            <h3 className="text-xl sm:text-2xl font-heading text-crbro-white group-hover:text-crbro-gold transition-colors">{title}</h3>
            <p className="text-sm text-crbro-white/60 mt-1">{artist}</p>
            {plays && (
              <p className="text-xs text-crbro-gold/50 mt-1 font-heading tracking-wider">{plays}</p>
            )}
            <div className="mt-4 flex items-center gap-2 text-xs text-crbro-gold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Listen on Spotify
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 rounded-sm bg-crbro-medium/20 border border-crbro-gold/5 hover:border-crbro-gold/20 hover:bg-crbro-medium/30 transition-all"
    >
      <div className="relative w-12 h-12 flex-shrink-0 bg-crbro-medium rounded-sm overflow-hidden">
        {coverUrl ? (
          <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-5 h-5 text-crbro-gold/40 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-crbro-gold/50 font-medium uppercase tracking-wider">{role}</p>
        <p className="text-sm font-heading text-crbro-white truncate group-hover:text-crbro-gold transition-colors">{title}</p>
        <p className="text-xs text-crbro-white/50 truncate">{artist}</p>
        {plays && <p className="text-xs text-crbro-white/30">{plays}</p>}
      </div>
      <svg className="w-4 h-4 text-crbro-white/30 flex-shrink-0 group-hover:text-crbro-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
