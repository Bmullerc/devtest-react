import { BracketsSquare } from 'phosphor-react'

export function Navbar() {
  return (
    <nav className='flex fixed w-screen text-lg font-medium justify-between gap-4 items-center py-2 px-6 lg:px-12 bg-zinc-900 text-zinc-50 shadow-sm'>
      <a href="#home">
        <BracketsSquare
          size={32}
          className="text-green-400 hover:text-zinc-50 hover:cursor-pointer"
        />
      </a>

      <ul className="flex gap-4">
        <li className="transition-colors duration-150 ease-out hover:text-green-400 hover:cursor-pointer"><a href="#posts">Posts</a></li>
        <li className="transition-colors duration-150 ease-out hover:text-green-400 hover:cursor-pointer"><a href="#albums">Albums</a></li>
        <li className="transition-colors duration-150 ease-out hover:text-green-400 hover:cursor-pointer"><a href="#todos">To-Dos</a></li>
      </ul>
    </nav>
  )
}