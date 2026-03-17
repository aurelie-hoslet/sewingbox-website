const screens = [
  {
    title: 'Les Patrons',
    desc: 'Vue en cartes de tous vos patrons avec filtres avancés, favoris et statut.',
    emoji: '🎀',
    color: 'from-rose-light to-rose/10',
    accent: 'bg-rose',
  },
  {
    title: 'Gestion de Tissus',
    desc: 'Votre stash complet avec photos, métrages et caractéristiques de chaque tissu.',
    emoji: '🧵',
    color: 'from-bleu-light/40 to-menthe-light/30',
    accent: 'bg-bleu',
  },
  {
    title: 'Suivi de Projets',
    desc: 'Étapes de couture, statut, tissus utilisés et patrons associés à chaque projet.',
    emoji: '📋',
    color: 'from-menthe-light to-bleu-light/20',
    accent: 'bg-menthe',
  },
  {
    title: 'Inspirations',
    desc: 'Sauvegardez vos inspirations avec liens, images et notes pour ne rien oublier.',
    emoji: '✨',
    color: 'from-lavande-light to-peche-light/30',
    accent: 'bg-lavande',
  },
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-24 px-6 bg-orange-50/30">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-menthe-light text-menthe text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <span>🖼️</span> Aperçu de l'application
          </div>
          <h2 className="text-4xl md:text-5xl text-bleu-dark mb-4">
            Belle, intuitive,<br />faite pour vous
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-body">
            Une interface colorée et agréable à utiliser au quotidien.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {screens.map((s) => (
            <div key={s.title} className={`bg-gradient-to-br ${s.color} rounded-3xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-shadow`}>
              {/* Placeholder screenshot */}
              <div className="bg-white/60 backdrop-blur rounded-2xl aspect-video flex flex-col items-center justify-center gap-3 mb-4 border border-white/80">
                <span className="text-6xl">{s.emoji}</span>
                <span className="text-gray-400 text-sm font-body italic">Screenshot à venir</span>
              </div>
              <div className="flex items-start gap-3">
                <div className={`${s.accent} text-white text-xs font-bold px-3 py-1 rounded-full mt-0.5 shrink-0`}>
                  {s.emoji}
                </div>
                <div>
                  <h3 className="font-display text-lg text-bleu-dark">{s.title}</h3>
                  <p className="text-gray-600 text-sm font-body mt-0.5">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 bg-gradient-to-r from-rose to-bleu rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-display mb-3">Prête à organiser votre couture ?</h3>
          <p className="font-body opacity-80 mb-6">Téléchargement gratuit, aucun compte requis.</p>
          <button disabled
            className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-2xl cursor-not-allowed opacity-70 transition-all">
            ⬇️ Télécharger — Disponible bientôt
          </button>
        </div>

      </div>
    </section>
  )
}
