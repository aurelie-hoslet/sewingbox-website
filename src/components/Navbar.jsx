import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Aperçu', href: '#screenshots' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#footer' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-light/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl text-bleu-dark">
          <span className="text-2xl">📐</span>
          <span>Sewing Box</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-bold text-gray-600 hover:text-rose transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#download"
            className="bg-rose text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-rose-dark transition-colors shadow-md">
            Télécharger
          </a>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-rose-light/50 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-bold text-gray-700 hover:text-rose">
              {l.label}
            </a>
          ))}
          <a href="#download" onClick={() => setOpen(false)}
            className="bg-rose text-white font-bold px-5 py-2 rounded-full text-center">
            Télécharger
          </a>
        </div>
      )}
    </nav>
  )
}
