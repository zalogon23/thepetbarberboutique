import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import fetchJson from '../lib/fetchJson'

function PopUp({ close }) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

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
          <label className="text-xl w-full flex font-bold justify-between items-center pb-2">
            Tu nombre:
            <input placeholder="Juan" className="border w-8/12 py-1 px-3 rounded text-lg" type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label className="text-xl w-full flex font-bold justify-between items-center pb-8">
            Tu email:
            <input placeholder="ejemplo@gmail.com" className="border w-8/12 py-1 px-3 rounded text-lg" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <button onClick={(e) => suscribe(e, close, name, email)} className="py-2 px-5 hover:bg-blue-500 text-xl bg-white text-blue-500 border border-blue-500 hover:text-white rounded">Enviar</button>
        </form>
      </div>
    </section>
  )
}

function suscribe(e, close, name, email) {
  e.preventDefault()
  if (!emailValid(email)) {
    close()
    return
  }
  fetchJson("/api/users/suscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name: nameValid(name) ? name : "usuario", email })
  })
  close()
}

function nameValid(name) {
  return !!name.length
}

function emailValid(email) {
  const validEmails = ["@gmail.com", "@gmail.com.ar", "@outlook.com", "@outlook.com.ar", "@hotmail.com", "@hotmail.com.ar", "@yahoo.com", "@yahoo.com.ar", "@live.com", "@live.com.ar"];
  const matches = validEmails.find(valid => email.indexOf(valid) !== 0 && email.indexOf(valid) !== -1)
  return !!matches
}

export default PopUp
