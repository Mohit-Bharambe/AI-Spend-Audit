function Navbar() {
  return (
    <header className="panel sticky top-4 z-20 flex items-center justify-between px-5 py-4 sm:px-6">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sm font-semibold text-white">
          AI
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Audit Layer
          </p>
          <p className="text-sm text-slate-400">
            Governance for modern AI adoption
          </p>
        </div>
      </div>

      <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
        <a href="/" className="transition hover:text-white">
          Overview
        </a>
        <a href="/" className="transition hover:text-white">
          Controls
        </a>
        <a href="/" className="transition hover:text-white">
          Reports
        </a>
      </nav>

      <button
        type="button"
        className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/10"
      >
        New review
      </button>
    </header>
  )
}

export default Navbar
