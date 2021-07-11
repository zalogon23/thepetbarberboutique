import React from 'react'
import Link from "next/link"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone } from '@fortawesome/free-solid-svg-icons';

function Header({ children }) {

  const [open, setOpen] = useState(true);

  return (
    <header className="border-b border-blue-500">
      <div className="upper flex justify-between items-center py-5 px-2">
        <Link href="/">
          <img className="cursor-pointer w-8 h-8 object-contain" src="/logo.png" />
        </Link>
        <h1 className="text-md text-blue-500 font-bold"><Link href="/">THE PET BARBER BOUTIQUE</Link></h1>
        <div className="flex flex-col items-center w-6 text-blue-500 text-xs cursor-pointer hover:text-blue-400" onClick={toggleOpen}>
          <FontAwesomeIcon icon={faBone} />
          <FontAwesomeIcon icon={faBone} />
        </div>
      </div>
      <nav className={`bg-blue-500 transition-height duration-150 overflow-hidden ${open ? "h-60" : "h-0"}`}>
        <ul className={`w-full h-full flex flex-col justify-around py-3 px-5 transition-transform duration-500 transform ${open ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"} text-lg font-bold text-white`}>
          <li><Link href="/"><a>Inicio</a></Link></li>
          <li><Link href="/servicios"><a>Servicios</a></Link></li>
          <li><Link href="/contacto"><a>Contacto</a></Link></li>
          <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
          <li><Link href="/blog"><a>BLOG</a></Link></li>
        </ul>
      </nav>
    </header>
  )

  function toggleOpen() {
    setOpen(!open)
  }
}

export default Header
