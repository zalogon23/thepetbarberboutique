import React from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { whatsapp, facebook, instagram } from '../lib/socialMedia';

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-blue-500 text-white pb-6">
      <div className="bg-blue-600 mb-8 w-full flex flex-col items-center">
        <h3 className="text-lg py-12 font-aclo md:text-3xl md:py-24">¿Donde podes encontrarnos?</h3>
        <div className="flex w-full justify-center lg:pb-8">
          <iframe
            className="w-full lg:max-w-lg h-96 lg:mr-12"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY || "AIzaSyAVsTI76O2kf-TCyKmNnPymV3ZWHf-rUoc"}&q=Romulo+Naon+2730,+Buenos+Aires,+Argentina&zoom=16`}
            frameBorder="0" />
          <SocialSheet extra="hidden lg:flex" />
        </div>
      </div>
      <SocialSheet extra="flex flex-col sm:grid sm:grid-cols-2 lg:hidden" />
      <div className="pb-2 md:text-2xl">Copyright © The Pet Barber Boutique</div>
      <a className="cursor-pointer  md:text-2xl text-blue-300 hover:text-blue-200" href={whatsapp.developer.askForPage}>Sitio hecho por Virtualizar</a>
    </footer>
  )
}

function SocialSheet({ extra }) {
  return (
    <div className={`lg:flex-col pb-8 ${extra}`}>
      <div className="px-8">
        <p className="break-words mb-4">
          <a href="https://www.google.com/maps?ll=-34.564046,-58.476798&z=16&t=m&hl=es-US&gl=US&mapclient=embed&q=Dr.+R%C3%B3mulo+Na%C3%B3n+2730+C1430+EQB+Buenos+Aires"><span className="text-xl font-bold text-blue-700">Dirección:</span> Dr. Romulo Naón 2730, Buenos Aires</a>
        </p>
        <p className="break-words mb-4">
          <a href={whatsapp.owner.askForService("")}><span className="text-xl font-bold text-blue-700">Telefono:</span>+54 9 11 3377-4203</a>
        </p>
        <p className="break-words mb-4">
          <span className="text-xl font-bold text-blue-700">Email:</span> thepetbarberboutique@gmail.com
        </p>
      </div>
      <div className="flex sm:flex-row text-5xl md:text-7xl justify-center items-center pb-8">
        <Link href={facebook}><a><FontAwesomeIcon className="m-3" icon={faFacebook} /></a></Link>
        <Link href={instagram}><a><FontAwesomeIcon className="m-3" icon={faInstagram} /></a></Link>
        <Link href={whatsapp.owner.askForService("")}><a><FontAwesomeIcon className="m-3" icon={faWhatsapp} /></a></Link>
      </div>
    </div>
  )
}

export default Footer
