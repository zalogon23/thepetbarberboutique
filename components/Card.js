import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk, faPhone, faMobile, faFax, faMap, faSmoking } from "@fortawesome/free-solid-svg-icons"

import React from 'react'



function Card({ title, socialMedia, description, color }) {

  const icon = getIcons(socialMedia)
  const colorSelected = getColors(color)
  const textColor = "text-gray-500"
  console.log(description)

  return (
    <article className="flex flex-col px-2 pt-8 pb-16 border-b border-gray-300">
      <FontAwesomeIcon className={`text-8xl ${colorSelected} self-center my-8`} icon={icon} />
      <h3 className="pb-3 text-3xl font-bold">{title}</h3>
      <div className={`py-2 ${textColor}`} dangerouslySetInnerHTML={{ __html: description }} />
    </article>
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
