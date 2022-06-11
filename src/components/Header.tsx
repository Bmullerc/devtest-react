export function Header() {
  return (
    <header id='home' className="flex h-screen text-center items-center justify-center bg-green-200">
      <div className="mx-auto mt-12 h-max">
        <h1
          className="font-bold lg:text-7xl text-6xl tracking-tight text-zinc-800"
        >
          We [<span className="text-green-500"> do </span>] Things
        </h1>
        <p
          className="text-3xl text-zinc-700  tracking-tighter font-light lg:-mt-4"
        >
          We like the things we do
        </p>
      </div>
    </header>
  )
}