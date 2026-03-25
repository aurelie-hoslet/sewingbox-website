const screens = [
  {
    title: 'Accueil',
    desc: 'Vue d\'ensemble de toute votre collection en un coup d\'œil.',
    img: '/screenshots/accueil.png',
    emoji: '🏠',
    color: 'from-rose-light/60 to-bleu-light/30',
    accent: 'bg-rose',
    wide: true,
  },
  {
    title: 'Les Patrons',
    desc: 'Vue en cartes de tous vos patrons avec filtres avancés, favoris et statut.',
    img: '/screenshots/patrons.png',
    emoji: '🎀',
    color: 'from-rose-light to-rose/10',
    accent: 'bg-rose',
  },
  {
    title: 'Gestion de Tissus',
    desc: 'Votre stash complet avec photos, métrages et caractéristiques de chaque tissu.',
    img: '/screenshots/tissus.png',
    emoji: '🧵',
    color: 'from-bleu-light/40 to-menthe-light/30',
    accent: 'bg-bleu',
  },
  {
    title: 'Suivi de Projets',
    desc: 'Étapes de couture, statut, tissus utilisés et patrons associés à chaque projet.',
    img: '/screenshots/projets.png',
    emoji: '📋',
    color: 'from-menthe-light to-bleu-light/20',
    accent: 'bg-menthe',
  },
  {
    title: 'Wish List',
    desc: 'Vos envies créatives avec aperçu automatique des liens, priorités et notes.',
    img: '/screenshots/wishlist.png',
    emoji: '🔖',
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
            <div key={s.title} className={`bg-gradient-to-br ${s.color} rounded-3xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-shadow ${s.wide ? 'sm:col-span-2' : ''}`}>
              <div className="rounded-2xl aspect-video overflow-hidden mb-4 border border-white/80">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover object-top" />
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


      </div>
    </section>
  )
}
