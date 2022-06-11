export function Home() {
  return (
    <article id='home' className="flex h-screen text-center items-center justify-center bg-green-200">
      <div className="mx-auto mt-12 h-max">
        <h1
          className="font-bold lg:text-7xl text-6xl tracking-wider"
        >
          We do Things
        </h1>
        <p
          className="font-medium text-2xl text-zinc-700 tracking-tighter"
        >
          We like the things we do.
        </p>
      </div>
    </article>
  )
}