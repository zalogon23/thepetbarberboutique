import { FacebookShareButton, WhatsappShareButton, FacebookMessengerShareButton } from "react-share"
import { faFacebook, faWhatsapp, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react'

function Share({ url }) {
  return (
    <section>
      <h3 className="px-2 py-8 uppercase font-bold text-center md:text-2xl border-b">Si te gusto el contenido te invitamos a que lo compartas con tus amigos y familiares:</h3>
      <div className="grid grid-cols-3 mx-auto max-w-lg text-sm sm:text-xl cursor-pointer">
        <FacebookShareButton url={url}>
          <div className="hover:bg-blue-700 py-4 px-2 bg-blue-800 flex text-white justify-center items-center" >
            <FontAwesomeIcon className="mr-2" icon={faFacebook} />
            Compartir
          </div>
        </FacebookShareButton>
        <WhatsappShareButton url={url}>
          <div className="hover:bg-green-500 py-4 px-2 bg-green-600 flex text-white justify-center items-center">
            <FontAwesomeIcon className="mr-2" icon={faWhatsapp} />
            Mostrar
          </div>
        </WhatsappShareButton>
        <FacebookMessengerShareButton
          url={url}>
          <div className="hover:bg-blue-400 py-4 px-2 bg-blue-500 flex text-white justify-center items-center">
            <FontAwesomeIcon className="mr-2" icon={faFacebookMessenger} />
            Enviar
          </div>
        </FacebookMessengerShareButton>
      </div>
    </section>
  )
}

export default Share
