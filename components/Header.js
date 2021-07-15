import React, { useState } from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="upper flex flex-col items-center">
        <div className="flex justify-between items-center py-5 px-1">
          <Link href="/">
            <img className="cursor-pointer w-16 h-16 object-contain transition-transform duration-300 hover:rotate-45" src="/logo.png" />
          </Link>
          <h1 className="text-2xl font-aclo mx-2 text-blue-500 font-black text-center"><Link href="/">THE PET BARBER BOUTIQUE</Link></h1>
        </div>
        <div className="bg-blue-500 py-2 w-full flex flex-col items-center text-white text-2xl cursor-pointer h-16 md:hidden" onClick={toggleOpen}>
          <FontAwesomeIcon className="text-5xl transition hover:scale-125" icon={faBone} />
        </div>
      </div>
      <nav className={`bg-blue-600 transition-height duration-150 overflow-hidden ${open ? "h-60" : "h-0"} md:bg-blue-500 md:h-16`}>
        <ul className={`w-full h-full flex flex-col justify-around py-3 px-5 transition-transform duration-700 transform ${open ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"} text-xl font-bold text-white md:flex-row md:translate-x-0 md:justify-end md:opacity-100`}>
          <li className="hover:text-blue-400 flex items-center md:px-6"><Link href="/"><a>Inicio</a></Link></li>
          <li className="hover:text-blue-400 flex items-center md:px-6"><Link href="/servicios"><a>Servicios</a></Link></li>
          <li className="hover:text-blue-400 flex items-center md:px-6"><Link href="/contacto"><a>Contacto</a></Link></li>
          <li className="hover:text-blue-400 flex items-center md:px-6"><Link href="/nosotros"><a>Nosotros</a></Link></li>
          <li className="hover:text-blue-400 flex items-center md:px-6"><Link href="/blog"><a>BLOG</a></Link></li>
        </ul>
      </nav>
    </header>
  )

  function toggleOpen() {
    setOpen(!open)
  }
}

export default Header
