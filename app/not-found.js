export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 my-44 flex flex-col items-center gap-20">
      <div className="flex flex-col items-center gap-1">
        <p className="text-primary font-medium text-lg">404</p>
        <h2 className="text-center text-4xl font-bold text-black sm:text-5xl mb-6">Page not found</h2>
        <p className="text-center tracking-wide max-w-3xl text-neutral">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      </div>
    </div>
  )
}