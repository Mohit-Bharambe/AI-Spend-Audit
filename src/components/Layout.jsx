import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] h-[30rem] bg-[radial-gradient(circle,_rgba(59,130,246,0.06),_transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[-10rem] top-[20rem] h-[25rem] w-[25rem] rounded-full bg-blue-100/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="flex-1 py-6 sm:py-8">{children}</main>
      </div>
    </div>
  )
}


export default Layout
