function Navbar() {
  return (
    <header className="panel sticky top-4 z-20 animate-enter px-4 py-4 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/18 to-white/8 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(56,189,248,0.15)]">
            SA
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Spend Audit
            </p>
            <p className="truncate text-sm text-slate-400">
              Finance-aware AI cost clarity for startups
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#supported-tools" className="nav-link">
            Tools
          </a>
          <a href="#benefits" className="nav-link">
            Benefits
          </a>
          <a href="#audit-results" className="nav-link">
            Results
          </a>
        </nav>

        <button type="button" className="btn-primary px-5 py-2.5 text-sm">
          Run Free Audit
        </button>
      </div>
    </header>
  )
}

export default Navbar
