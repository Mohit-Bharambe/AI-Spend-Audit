import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-x-0 top-[-12rem] h-[28rem] bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_62%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="flex-1 py-6 sm:py-8">{children}</main>
      </div>
    </div>
  )
}

export default Layout
