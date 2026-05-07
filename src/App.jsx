import Layout from './components/Layout'

function App() {
  const overview = [
    { label: 'Tracked seats', value: '1,284', detail: '+18% this month' },
    { label: 'Policy coverage', value: '94%', detail: 'Across core workflows' },
    { label: 'Flagged risks', value: '12', detail: '3 need review today' },
  ]

  const pillars = [
    {
      title: 'Usage visibility',
      description:
        'See who is using which AI tools, where spend is growing, and where shadow adoption is slipping past procurement.',
    },
    {
      title: 'Control workflows',
      description:
        'Route legal, security, and data reviews through one operating layer without slowing teams down.',
    },
    {
      title: 'Executive reporting',
      description:
        'Translate audit signals into a board-ready view with posture, exposure, and adoption trends in one place.',
    },
  ]

  const activity = [
    'Finance approved vendor access for Claude Enterprise.',
    'Security flagged a prompt export policy gap in two teams.',
    'Procurement detected 7 duplicate AI subscriptions.',
  ]

  return (
    <Layout>
      <section className="panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_58%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <span className="eyebrow">AI Usage Audit Platform</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Bring AI usage, policy controls, and spend into one dark command
              layer.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              A cleaner operating surface for teams auditing adoption, managing
              access, and reducing shadow tooling before it becomes risk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
              >
                Start audit
              </button>
              <button
                type="button"
                className="rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/8"
              >
                Review controls
              </button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {overview.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_18px_60px_rgba(2,6,23,0.45)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Control center</p>
                <p className="mt-1 text-sm text-slate-400">
                  Live governance posture
                </p>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Healthy
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Critical vendors</p>
                    <p className="mt-2 text-3xl font-semibold text-white">08</p>
                  </div>
                  <p className="text-sm text-cyan-300">2 pending approval</p>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/6">
                  <div className="h-2 w-[76%] rounded-full bg-cyan-300" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {pillars.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 last:sm:col-span-2"
                  >
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-white">Recent activity</p>
              <p className="mt-1 text-sm text-slate-400">
                Approval, security, and spend signals
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Today
            </span>
          </div>
          <div className="mt-6 space-y-3">
            {activity.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-medium text-cyan-200">
                  0{index + 1}
                </div>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-lg font-semibold text-white">
                Audit workflow
              </p>
              <p className="mt-1 text-sm text-slate-400">
                A minimal review path for operations teams
              </p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
              4-step flow
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              'Discover tools across teams and vendors',
              'Map owners, costs, and data exposure',
              'Review policy fit and approval status',
              'Ship executive summary with next actions',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.06] to-transparent p-5"
              >
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default App
