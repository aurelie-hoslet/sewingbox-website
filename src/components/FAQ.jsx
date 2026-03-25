import { useState } from 'react'

const faqs = [
  {
    q: 'Combien coûte Sewing Box ?',
    a: 'En phase de développement, Sewing Box est disponible gratuitement. Les mises à jour vous seront proposées normalement, sans interruption. Si l\'application vous est utile et vous apporte satisfaction, il vous sera possible d\'offrir un café à la créatrice. ☕',
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: 'Vos données vous appartiennent. Dans sa version actuelle, Sewing Box fonctionne entièrement sur votre ordinateur — vos patrons, photos et notes ne quittent pas votre machine.',
  },
  {
    q: 'Sur quels systèmes d\'exploitation fonctionne l\'application ?',
    a: 'Sewing Box est actuellement disponible sur Windows.',
  },
  {
    q: 'Où Sewing Box enregistre-t-il mes données ?',
    a: 'Tout est enregistré dans un dossier sur votre ordinateur. Vous aurez toujours la possibilité d\'accéder à vos documents sans passer par Sewing Box.',
  },
  {
    q: 'L\'application va-t-elle continuer à être mise à jour ?',
    a: 'Sewing Box est en phase de développement actif — tout n\'est pas encore terminé, et c\'est voulu ! De nouvelles fonctionnalités arrivent régulièrement. Les retours des utilisatrices sont précieux et contribuent directement à faire évoluer l\'application. Une communauté Discord est en préparation pour échanger et partager vos idées.',
  },
  {
    q: 'Quels types de patrons peuvent être répertoriés ?',
    a: 'Tous vos patrons sans exception ! PDFs numériques, patrons pochette, pages de magazines ou extraits de livres de couture — si vous l\'avez dans votre collection, Sewing Box peut le répertorier.',
  },
  {
    q: 'Faut-il créer un compte ou partager ses créations ?',
    a: 'Non. Sewing Box est un outil personnel — aucun compte, aucun profil, aucun fil d\'actualité. Vos créations vous appartiennent et restent privées. C\'est votre espace, rien qu\'à vous.',
  },
  {
    q: 'Faut-il être connectée à internet pour utiliser Sewing Box ?',
    a: 'Non. Sewing Box fonctionne entièrement hors ligne. Pas besoin de connexion pour accéder à vos patrons, tissus ou projets — l\'application est disponible à tout moment, même sans internet.',
  },
  {
    q: 'Comment contribuer à l\'amélioration de Sewing Box ?',
    a: 'Vos retours sont la meilleure façon de faire grandir Sewing Box ! Si vous rencontrez un bug, avez une idée ou une suggestion, vous pouvez me contacter directement via la page Contact. La communauté Discord en préparation sera aussi un espace dédié aux échanges et aux propositions.',
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
            Contactez-moi →
          </a>
        </div>

      </div>
    </section>
  )
}
