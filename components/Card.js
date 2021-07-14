import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk, faPhone, faMobile, faFax, faMap, faSmoking } from "@fortawesome/free-solid-svg-icons"
import { facebook, instagram, whatsapp } from "../lib/socialMedia";

import React from 'react'
import Link from "next/link";

function Card({ title, socialMedia, description, color, last }) {

  const icon = getIcons(socialMedia)
  const colorSelected = getColors(color)
  const textColor = "text-gray-500"
  const defaultLink = "https://facebook.com";
  const ownerSocialMedia = { facebook, whatsapp: whatsapp.owner.askForService(""), instagram }

  return (
    <Link href={ownerSocialMedia[socialMedia] ?? defaultLink}>
      <a>
        <article className={`flex flex-col px-2 pt-8 pb-16 ${!last && "border-b border-gray-300"} sm:border sm:border-gray-300  sm:px-4 sm:rounded`}>
          <FontAwesomeIcon className={`text-8xl ${colorSelected} self-center my-8`} icon={icon} />
          <h3 className="pb-3 text-3xl font-bold">{title}</h3>
          <div className={`py-2 ${textColor} sm:h-32`} dangerouslySetInnerHTML={{ __html: description }} />
          <button className="p-2 bg-blue-500 text-white text-xl font-bold">Visitar</button>
        </article>
      </a>
    </Link>
  )
}

function getColors(option) {
  const palette = {
    verde: "text-green-500",
    azul: "text-blue-500",
    rosa: "text-pink-500",
    negro: "text-black",
    amarillo: "text-yellow-500",
    gris: "text-gray-500",
    rojo: "text-red-500",
    violeta: "text-purple-500",
  }
  return palette[option]
}

function getIcons(option) {
  const socials = {
    facebook: faFacebook,
    whatsapp: faWhatsapp,
    twitter: faTwitter,
    direccion: faMap,
    instagram: faInstagram,
    fijo: faPhone,
    celular: faMobile,
    email: faMailBulk,
    email2: faMailBulk,
    fax: faFax,
    otro: faSmoking
  }
  return socials[option]
}

export default Card
