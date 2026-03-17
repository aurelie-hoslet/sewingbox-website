const features = [
  {
    icon: '📂',
    title: 'Gestion de patrons',
    desc: 'Cataloguez tous vos patrons avec marque, modèle, tailles, tissus requis, images et PDFs. Recherche et filtres avancés.',
    color: 'bg-rose-light',
    border: 'border-rose/30',
    badge: 'text-rose-dark',
  },
  {
    icon: '🧵',
    title: 'Stock de tissus',
    desc: 'Suivez votre stash de tissus : composition, couleur, métrage disponible, photo. Fini les doublons !',
    color: 'bg-bleu-light/30',
    border: 'border-bleu/30',
    badge: 'text-bleu-dark',
  },
  {
    icon: '🎨',
    title: 'Suivi de projets',
    desc: 'Créez des projets de couture, associez patrons et tissus, suivez les étapes et le statut de chaque réalisation.',
    color: 'bg-menthe-light',
    border: 'border-menthe/30',
    badge: 'text-menthe',
  },
  {
    icon: '🖼️',
    title: 'Galerie de réalisations',
    desc: 'Une belle galerie pour admirer vos créations terminées. Chaque projet avec ses photos et ses détails.',
    color: 'bg-peche-light',
    border: 'border-peche/30',
    badge: 'text-peche',
  },
  {
    icon: '✨',
    title: 'Inspirations & Wish List',
    desc: 'Sauvegardez vos inspirations et gérez votre liste de patrons à acheter. Ne ratez plus aucune pépite !',
    color: 'bg-lavande-light',
    border: 'border-lavande/30',
    badge: 'text-lavande',
  },
  {
    icon: '🔒',
    title: '100% local, vos données chez vous',
    desc: 'Aucun compte, aucun cloud, aucun abonnement. Tout tourne sur votre machine. Vos données vous appartiennent.',
    color: 'bg-green-50',
    border: 'border-green-300/50',
    badge: 'text-green-700',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-bleu-light/30 text-bleu-dark text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <span>⚡</span> Tout ce dont vous avez besoin
          </div>
          <h2 className="text-4xl md:text-5xl text-bleu-dark mb-4">
            Une app complète pour<br />les couturières passionnées
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-body">
            Sewing Box regroupe tous les outils pour organiser votre pratique de la couture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`${f.color} border-2 ${f.border} rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className={`text-xl font-display mb-2 ${f.badge}`}>{f.title}</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-bleu-dark rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: '∞', label: 'Patrons stockés' },
            { value: '0€', label: 'Pour toujours' },
            { value: '100%', label: 'Données locales' },
            { value: '8', label: 'Modules intégrés' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-4xl font-display text-menthe mb-1">{s.value}</div>
              <div className="text-white/70 text-sm font-body">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
