export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-12 px-6 overflow-hidden relative">

      {/* Background blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-rose-light/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-bleu-light/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-menthe-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-rose-light text-rose-dark text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            <span>✨</span> Application gratuite & locale
          </div>

          <h1 className="text-5xl md:text-6xl leading-tight mb-6 text-bleu-dark">
            Votre boîte à<br />
            <span className="gradient-text">couture numérique</span>
          </h1>

          <p className="text-lg text-gray-600 font-body mb-8 leading-relaxed max-w-md">
            Organisez vos patrons, tissus, projets et inspirations en un seul endroit.
            100% local — vos données restent sur votre ordinateur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#download" id="download"
              className="flex items-center justify-center gap-2 bg-rose text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:bg-rose-dark hover:shadow-xl transition-all hover:-translate-y-0.5 opacity-60 cursor-not-allowed pointer-events-none">
              <span>⬇️</span> Télécharger gratuitement
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-1">Bientôt</span>
            </a>
            <a href="#features"
              className="flex items-center justify-center gap-2 border-2 border-bleu text-bleu font-bold px-8 py-4 rounded-2xl text-lg hover:bg-bleu hover:text-white transition-all hover:-translate-y-0.5">
              Découvrir <span>→</span>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1.5"><span>🪟</span> Windows</div>
            <div className="flex items-center gap-1.5"><span>🍎</span> macOS <span className="text-xs text-gray-400">(bientôt)</span></div>
            <div className="flex items-center gap-1.5"><span>🔒</span> Données locales</div>
          </div>
        </div>

        {/* Mockup */}
        <div className="animate-float hidden md:block">
          <div className="relative">
            {/* Main window mockup */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Window chrome */}
              <div className="bg-bleu-dark px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-white/60 text-xs font-body">📐 Sewing Box</span>
              </div>

              {/* App content mockup */}
              <div className="flex" style={{ height: '340px' }}>
                {/* Sidebar */}
                <div className="w-44 bg-bleu-dark/95 p-3 flex flex-col gap-1">
                  {[
                    { icon: '🏠', label: 'Accueil', active: false },
                    { icon: '🎀', label: 'Les Patrons', active: true },
                    { icon: '🧵', label: 'Les Tissus', active: false },
                    { icon: '📋', label: 'Projets', active: false },
                    { icon: '🖼️', label: 'Galerie', active: false },
                    { icon: '🛍️', label: 'Les Dealers', active: false },
                    { icon: '✨', label: 'Inspirations', active: false },
                    { icon: '🔖', label: 'Wish List', active: false },
                  ].map(item => (
                    <div key={item.label}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        item.active
                          ? 'bg-white/15 text-white border-l-2 border-menthe'
                          : 'text-white/60'
                      }`}>
                      <span>{item.icon}</span>{item.label}
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 p-4 bg-orange-50/30">
                  <div className="text-xs font-bold text-gray-500 mb-3">📂 Mes patrons (12)</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Deer & Doe – Brume', tags: ['Robe', 'Femme'], color: 'rose' },
                      { label: 'Citronille – Mélisse', tags: ['Top', 'Enfant'], color: 'bleu' },
                      { label: 'Named – Aino', tags: ['Veste', 'Femme'], color: 'menthe' },
                      { label: 'Closet Core – Kalle', tags: ['Chemise', 'Unisexe'], color: 'lavande' },
                    ].map(card => (
                      <div key={card.label} className="bg-white rounded-xl p-2.5 shadow-sm border border-gray-100">
                        <div className={`w-full h-12 rounded-lg mb-2 flex items-center justify-center text-xl ${
                          card.color === 'rose' ? 'bg-rose-light' :
                          card.color === 'bleu' ? 'bg-bleu-light/30' :
                          card.color === 'menthe' ? 'bg-menthe-light' : 'bg-lavande-light'
                        }`}>🧵</div>
                        <div className="text-[10px] font-bold text-gray-700 leading-tight mb-1">{card.label}</div>
                        <div className="flex gap-1 flex-wrap">
                          {card.tags.map(t => (
                            <span key={t} className="text-[9px] bg-rose-light text-rose-dark px-1.5 py-0.5 rounded-full font-bold">{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-menthe text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
              🎉 Gratuit !
            </div>
            <div className="absolute -bottom-4 -left-4 bg-lavande text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              🔒 100% local
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
