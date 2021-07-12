import React from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import whatsapp from '../lib/whatsapp';

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-blue-500 text-white px-2 py-6">
      <div className="w-full flex text-5xl justify-center pb-4">
        <Link href="https://www.facebook.com"><a><FontAwesomeIcon className="mx-3" icon={faFacebook} /></a></Link>
        <Link href="https://www.whatsapp.com"><a><FontAwesomeIcon className="mx-3" icon={faWhatsapp} /></a></Link>
      </div>
      <div className="pb-2">Copyright © The Pet Shop Boutique</div>
      <a className="cursor-pointer text-blue-300 hover:text-blue-200" href={whatsapp.developer.askForPage}>Sitio hecho por Virtualizar</a>
    </footer>
  )
}

export default Footer
