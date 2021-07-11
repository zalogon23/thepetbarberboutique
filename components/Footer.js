import React from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
const whatsappMessageURL = "https://api.whatsapp.com/send?phone=5491135775481&text=Me%20gustaria%20consultar%20el%20precio%20de%20una%20pagina%20sobre...%20(describir)";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-blue-500 text-white px-2 py-6">
      <div className="w-full flex text-5xl justify-center pb-4">
        <Link href="https://www.facebook.com"><FontAwesomeIcon className="mx-3" icon={faFacebook} /></Link>
        <Link href="https://www.whatsapp.com"><FontAwesomeIcon className="mx-3" icon={faWhatsapp} /></Link>
      </div>
      <div className="pb-2">Copyright c The Pet Shop Boutique</div>
      <a className="cursor-pointer text-blue-300 hover:text-blue-200" href={whatsappMessageURL}>Sitio hecho por Virtualizar</a>
    </footer>
  )
}

export default Footer
