const features = [
  {
    icon: '📂',
    title: 'Patronthèque',
    desc: 'Filtrez, retrouvez. Vos patrons enfin organisés selon vos propres critères.',
    color: 'bg-rose-light',
    border: 'border-rose/30',
    badge: 'text-rose-dark',
  },
  {
    icon: '🧵',
    title: 'Vos tissus',
    desc: 'Gardez votre stash sous contrôle. Retrouvez chaque tissu, son métrage disponible et sa composition en un clin d\'œil.',
    color: 'bg-bleu-light/30',
    border: 'border-bleu/30',
    badge: 'text-bleu-dark',
  },
  {
    icon: '🎨',
    title: 'Vos projets',
    desc: 'Suivez chaque projet de l\'idée aux finitions. Patrons, tissus, étapes, notes… tout est lié en un seul endroit.',
    color: 'bg-menthe-light',
    border: 'border-menthe/30',
    badge: 'text-menthe',
  },
  {
    icon: '🖼️',
    title: 'La Galerie',
    desc: 'Gardez une trace de vos réalisations et épatez la galerie !',
    color: 'bg-peche-light',
    border: 'border-peche/30',
    badge: 'text-peche',
  },
  {
    icon: '✨',
    title: 'Inspirations',
    desc: 'Vos idées, vos coups de cœur : tout y a sa place !',
    color: 'bg-lavande-light',
    border: 'border-lavande/30',
    badge: 'text-lavande',
  },
  {
    icon: '🔖',
    title: 'Wish List',
    desc: 'Vos listes d\'envies créatives. Patrons, tissus, mercerie, machines, accessoires… tout ce qui fait briller vos yeux.',
    color: 'bg-rose-light/60',
    border: 'border-rose/20',
    badge: 'text-rose-dark',
  },
  {
    icon: '🛍️',
    title: 'Carnet d\'adresses',
    desc: 'Patrons, tissus, mercerie, créateurs… Centralisez tous vos shops favoris et ne perdez plus jamais une bonne adresse web ou postale.',
    color: 'bg-bleu-light/20',
    border: 'border-bleu/20',
    badge: 'text-bleu-dark',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-bleu-light/30 text-bleu-dark text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <span>⚡</span> Ne perdez plus le fil de vos idées
          </div>
          <h2 className="text-4xl md:text-5xl text-bleu-dark mb-4">
            L'organisation sur mesure
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-body">
            Patrons, tissus, projets… Sewing Box centralise tout pour que vous puissiez vous concentrer sur l'essentiel : coudre
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

      </div>
    </section>
  )
}
