import { useEffect, useState } from 'react'

function useDownloadCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/aurelie-hoslet/patrontheque/releases')
      .then(r => r.json())
      .then(releases => {
        const total = releases.reduce((sum, release) =>
          sum + release.assets.reduce((s, a) => s + a.download_count, 0), 0)
        setCount(total)
      })
      .catch(() => {})
  }, [])

  return count
}

export default function Footer() {
  const downloadCount = useDownloadCount()

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
              Votre boîte à couture numérique faite avec ❤️ pour les couturières passionnées.
            </p>
            <a href="https://github.com/aurelie-hoslet/sewingbox-website"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/80 text-xs font-bold px-3 py-1.5 rounded-full w-fit transition-colors">
              🔓 Open Source
            </a>
            <div className="mt-4">
              <a href='https://ko-fi.com/F1F11WJ643' target='_blank' rel="noopener noreferrer">
                <img height='36' style={{ border: 0, height: 36 }} src='https://storage.ko-fi.com/cdn/kofi5.png?v=6' alt='Buy Me a Coffee at ko-fi.com' />
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display text-lg mb-4 text-menthe">Communauté</h4>
            <div className="flex flex-col gap-3">
              <a href="https://discord.gg/7wXj5RZX" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl px-4 py-3 transition-colors">
                <span className="text-xl">💬</span>
                <div>
                  <div className="font-bold text-sm">Discord</div>
                  <div className="text-white/50 text-xs">Rejoindre la communauté</div>
                </div>
              </a>
              <a href="#contact"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl px-4 py-3 transition-colors">
                <span className="text-xl">📧</span>
                <div>
                  <div className="font-bold text-sm">Contact</div>
                  <div className="text-white/50 text-xs">Envoyer un message</div>
                </div>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div>
            <h4 className="font-display text-lg mb-4 text-menthe">En chiffres</h4>
            <div className="bg-white/10 rounded-2xl px-4 py-3 w-fit">
              <div className="text-3xl font-display text-white">
                {downloadCount !== null ? downloadCount.toLocaleString('fr-FR') : '—'}
              </div>
              <div className="text-white/50 text-xs mt-0.5">téléchargements</div>
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
