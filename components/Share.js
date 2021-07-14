import { FacebookShareButton, WhatsappShareButton, FacebookMessengerShareButton } from "react-share"
import { faFacebook, faWhatsapp, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react'

function Share({ url }) {
  return (
    <section>
      <h3 className="px-2 py-8 uppercase font-bold text-center">Si te gusto el contenido te invitamos a que lo compartas con tus amigos y familiares:</h3>
      <div className="grid grid-cols-3">
        <div className="py-4 px-2 text-sm bg-blue-800 flex text-white justify-center items-center">
          <FontAwesomeIcon className="mr-2" icon={faFacebook} />
          <FacebookShareButton url={url}>Compartir</FacebookShareButton>
        </div>
        <div className="py-4 px-2 text-sm bg-green-600 flex text-white justify-center items-center">
          <FontAwesomeIcon className="mr-2" icon={faWhatsapp} />
          <WhatsappShareButton url={url}>Mostrar</WhatsappShareButton>
        </div>
        <div className="py-4 px-2 text-sm bg-blue-500 flex text-white justify-center items-center">
          <FontAwesomeIcon className="mr-2" icon={faFacebookMessenger} />
          <FacebookMessengerShareButton url={url}>Enviar</FacebookMessengerShareButton>
        </div>
      </div>
    </section>
  )
}

export default Share
