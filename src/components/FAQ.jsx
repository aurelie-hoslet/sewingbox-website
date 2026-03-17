import { useState } from 'react'

const faqs = [
  {
    q: 'Sewing Box est-il vraiment gratuit ?',
    a: 'Oui, complètement gratuit. Pas de formule premium, pas d\'abonnement caché, pas de limite. L\'application est open-source et le restera.',
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: 'Absolument. Sewing Box fonctionne entièrement en local sur votre ordinateur. Aucune donnée n\'est envoyée sur internet. Vos patrons, photos et notes restent uniquement sur votre machine.',
  },
  {
    q: 'Sur quels systèmes d\'exploitation fonctionne l\'application ?',
    a: 'Actuellement disponible sur Windows. Une version macOS est en cours de développement. L\'application nécessite Node.js et MongoDB installés localement.',
  },
  {
    q: 'Puis-je importer mes patrons existants ?',
    a: 'Oui ! Sewing Box dispose d\'une fonction d\'import pour récupérer vos données depuis un fichier JSON. Vous pouvez aussi ajouter vos patrons manuellement un par un.',
  },
  {
    q: 'Comment sont stockées les images de mes patrons ?',
    a: 'Les images sont stockées directement dans la base de données locale (MongoDB). Les PDFs sont sauvegardés dans un dossier sur votre ordinateur. Tout reste en local.',
  },
  {
    q: 'L\'application va-t-elle continuer à être mise à jour ?',
    a: 'Oui ! Sewing Box est activement développé. De nouvelles fonctionnalités sont ajoutées régulièrement. Rejoignez la communauté Discord pour suivre les nouveautés et donner votre avis.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-lavande-light text-lavande text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <span>❓</span> Questions fréquentes
          </div>
          <h2 className="text-4xl md:text-5xl text-bleu-dark">
            Vous avez des questions ?
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-rose/30 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
              >
                <span className="font-bold text-bleu-dark">{faq.q}</span>
                <span className={`text-xl shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45 text-rose' : 'text-gray-400'}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 font-body leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-500 font-body text-sm">
          Vous avez d'autres questions ?{' '}
          <a href="#footer" className="text-rose font-bold hover:underline">
            Contactez-nous →
          </a>
        </div>

      </div>
    </section>
  )
}
