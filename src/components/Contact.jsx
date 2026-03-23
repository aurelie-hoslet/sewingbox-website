import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-rose-light/20">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-light text-rose-dark text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <span>💌</span> Contact
          </div>
          <h2 className="text-4xl md:text-5xl text-bleu-dark mb-4">
            On discute ?
          </h2>
          <p className="text-gray-500 text-lg font-body leading-relaxed">
            Une question, une idée, un bug à signaler ?<br />
            Je lis tous les messages avec attention.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-10 text-center shadow-lg border-2 border-rose/20">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-display text-bleu-dark mb-2">Message envoyé !</h3>
            <p className="text-gray-500 font-body">Merci, je vous répondrai dès que possible.</p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-rose/10 flex flex-col gap-5"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-bleu-dark">Prénom ou Pseudo</label>
                <input
                  type="text"
                  name="prenom"
                  required
                  placeholder="Marie, Coudreuse42…"
                  className="border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-rose transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-bleu-dark">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="vous@exemple.com"
                  className="border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-rose transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-bleu-dark">Objet</label>
              <select
                name="objet"
                required
                className="border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-rose transition-colors bg-white text-gray-700"
              >
                <option value="">Choisissez un objet…</option>
                <option value="bug">Je signale un problème</option>
                <option value="suggestion">Je suggère une fonctionnalité</option>
                <option value="mot-doux">Je laisse un mot doux à la créatrice</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-bleu-dark">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Votre message…"
                className="border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-rose transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="bg-rose text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:bg-rose-dark hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? 'Envoi en cours…' : 'Envoyer le message ✉️'}
            </button>
          </form>
        )}

      </div>
    </section>
  )
}
