import React from 'react'
import { faCut, faTint, faDog, faDrumstickBite, faHome, faFirstAid, faCamera, faTshirt } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import whatsapp from '../lib/whatsapp';

const models = getModels();

function Service({ title, description, last, type, model }) {
  const textColor = "text-gray-500"
  return (
    <article
      className={`pt-8 pb-16 flex flex-col
    ${model === "dorado" ? "text-yellow-500" : model === "oscuro" ? "text-black" : "text-blue-500"} mb-3 
    ${last ? "" : "border-b border-gray-300"}
    `}>
      <FontAwesomeIcon className="text-8xl my-6 self-center" icon={models[type]} />
      <h2 className="px-3 pt-5 text-3xl font-bold">{title}</h2>
      <div className={`px-3 pt-5 pb-10 ${textColor}`} dangerouslySetInnerHTML={{ __html: description }} />
      <Link href={whatsapp.owner.askForService(type)}>
        <a className="self-center">
          <button className={`py-2 px-4 w-40 flex justify-between items-center rounded border hover:text-white
          ${model === "dorado" ? "border-yellow-500 hover:bg-yellow-500" : model === "oscuro" ? "border-black hover:bg-black" : "border-blue-500 hover:bg-blue-500"}
          `} ><FontAwesomeIcon className="text-2xl" icon={faWhatsapp} />
            <span className="text-xl font-bold">Consultar</span>
          </button>
        </a>
      </Link>
    </article>
  )
}

function getModels() {
  return ({
    corte: faCut,
    limpieza: faTint,
    paseo: faDog,
    comida: faDrumstickBite,
    ropa: faTshirt,
    cuidado: faHome,
    salud: faFirstAid,
    fotos: faCamera
  })
}


export default Service
