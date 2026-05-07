function Hero() {
  return (
    <section
      id="hero"
      className="panel animate-enter relative overflow-hidden px-6 py-10 sm:px-8 sm:py-14 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.24),_transparent_44%)]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow">AI Spend Visibility</span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
            Stop Overpaying For AI Tools
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            See exactly where your startup wastes money on ChatGPT, Claude,
            Cursor, and APIs before renewals stack up and shadow spend gets
            normalized.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" className="btn-primary">
              Run Free Audit
            </button>
            <button type="button" className="btn-secondary">
              See sample report
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2">
              Audit output in under 5 minutes
            </span>
            <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2">
              Finance, engineering, and ops friendly
            </span>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ['22%', 'avg recoverable AI waste'],
              ['6 tools', 'tracked across one startup'],
              ['1 page', 'shareable audit summary'],
            ].map(([value, label]) => (
              <div key={label} className="stat-card">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-dark relative overflow-hidden p-5">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-300/8 to-transparent" />
          <div className="relative flex items-center justify-between border-b border-white/8 pb-4">
            <div>
              <p className="text-sm font-medium text-white">Waste snapshot</p>
              <p className="mt-1 text-sm text-slate-400">
                Last 30 days across teams
              </p>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Live
            </span>
          </div>

          <div className="relative mt-5 space-y-4">
            {[
              ['Unused seats', '$2,480', '11 licenses inactive'],
              ['Duplicate tools', '$1,320', 'Cursor + Copilot overlap'],
              ['API creep', '$860', 'Weekend spend anomaly'],
            ].map(([label, value, meta]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition duration-300 hover:border-cyan-300/18 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {value}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-cyan-300/10 ring-1 ring-cyan-300/20 shadow-[0_0_0_8px_rgba(34,211,238,0.04)]" />
                </div>
                <p className="mt-3 text-sm text-slate-400">{meta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
