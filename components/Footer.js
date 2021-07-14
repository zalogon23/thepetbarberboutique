import React from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import whatsapp from '../lib/whatsapp';

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-blue-500 text-white pb-6">
      <div className="bg-blue-600 mb-8 w-full flex flex-col items-center">
        <h3 className="text-lg py-12 font-aclo">¿Donde podes encontrarnos?</h3>
        <iframe
          className="w-full h-96"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY || "AIzaSyAVsTI76O2kf-TCyKmNnPymV3ZWHf-rUoc"}&q=Av.+Santa+Fe+5065,+Buenos+Aires,+Argentina&zoom=16`}
          frameBorder="0" />
      </div>
      <div className="w-full flex text-5xl justify-center pb-8">
        <Link href="https://www.facebook.com"><a><FontAwesomeIcon className="mx-3" icon={faFacebook} /></a></Link>
        <Link href="https://www.whatsapp.com"><a><FontAwesomeIcon className="mx-3" icon={faWhatsapp} /></a></Link>
      </div>
      <div className="pb-2">Copyright © The Pet Shop Boutique</div>
      <a className="cursor-pointer text-blue-300 hover:text-blue-200" href={whatsapp.developer.askForPage}>Sitio hecho por Virtualizar</a>
    </footer>
  )
}

export default Footer
