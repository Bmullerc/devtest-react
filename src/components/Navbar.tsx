import { BracketsSquare } from 'phosphor-react'

export function Navbar() {
  return (
    <nav className='flex fixed w-screen text-lg font-medium justify-between items-center py-2 px-6 md:px-16 lg:px-32 bg-zinc-900 text-zinc-50 tracking-wide shadow-sm'>
      <a href="#home">
        <BracketsSquare
          size={32}
          className="text-green-400 hover:text-zinc-50 hover:cursor-pointer"
        />
      </a>

      <ul className="flex gap-2 md:gap-4 lg:gap-6">
        <li className="transition-colors duration-150 ease-out hover:text-green-400 hover:cursor-pointer"><a href="#posts">Posts</a></li>
        <li className="transition-colors duration-150 ease-out hover:text-green-400 hover:cursor-pointer"><a href="#albums">Albums</a></li>
        <li className="transition-colors duration-150 ease-out hover:text-green-400 hover:cursor-pointer"><a href="#todos">To-Dos</a></li>
      </ul>
    </nav>
  )
}