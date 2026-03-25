export default function Footer() {
  return (
    <footer id="footer" className="bg-bleu-dark text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-display text-2xl mb-4">
              <span>📐</span> Sewing Box
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
              Votre boîte à couture numérique. Gratuite, locale, et faite avec ❤️ pour les couturières passionnées.
            </p>
            <a href="https://github.com/aurelie-hoslet/sewingbox-website"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/80 text-xs font-bold px-3 py-1.5 rounded-full w-fit transition-colors">
              🔓 Open Source
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-menthe">Navigation</h4>
            <ul className="flex flex-col gap-2 text-sm font-body text-white/60">
              {[
                { label: 'Fonctionnalités', href: '#features' },
                { label: 'Aperçu', href: '#screenshots' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Télécharger', href: '#download' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display text-lg mb-4 text-menthe">Communauté</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3 opacity-60 cursor-not-allowed">
                <span className="text-xl">💬</span>
                <div>
                  <div className="font-bold text-sm">Discord</div>
                  <div className="text-white/50 text-xs">Bientôt disponible</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3">
                <span className="text-xl">📧</span>
                <div>
                  <div className="font-bold text-sm">Contact</div>
                  <div className="text-white/50 text-xs">Via GitHub Issues</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40 font-body">
          <div>© {new Date().getFullYear()} Sewing Box — Gratuit et open-source</div>
          <div>Fait avec 🧵 pour les couturières</div>
        </div>

      </div>
    </footer>
  )
}
