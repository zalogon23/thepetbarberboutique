import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function PopUp({ close }) {
  return (
    <section className="fixed top inset-0 p-4 flex justify-center items-center">
      <div className=" bg-black opacity-50 absolute inset-0"></div>
      <div className="bg-white absolute py-12 px-2 mx-2 sm:px-12 rounded flex flex-col justify-center items-center">
        <FontAwesomeIcon onClick={close} className="absolute top-4 right-4 text-2xl hover:text-red-600 cursor-pointer" icon={faTimes} />
        <h2 className="text-2xl text-center font-black py-8">¡Ultimas promociones y descuentos!</h2>
        <p className="px-4 pb-4 text-gray-500">
          Para estas al tanto de futuras ofertas, consejos, articulos y muchos mas
        </p>
        <form className="flex flex-col items-center">
          <label className="text-xl w-full flex font-bold justify-around items-center pb-8">
            Tu email:
            <input placeholder="ejemplo@gmail.com" className="border w-8/12 py-1 px-3 rounded text-lg" type="email" />
          </label>
          <button onClick={(e) => suscribe(e, close)} className="py-2 px-5 hover:bg-blue-500 text-xl bg-white text-blue-500 border border-blue-500 hover:text-white rounded">Enviar</button>
        </form>
      </div>
    </section>
  )
}

function suscribe(e, close) {
  e.preventDefault()
  alert("Suscrito!")
  close()
}

export default PopUp
