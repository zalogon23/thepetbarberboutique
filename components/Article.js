import React from 'react'

function Article({ title, image, keywords = "pet barber boutique perros mascota corte", content, main = false, last }) {
  if (main) {
    return (
      <main className="pb-3 border-b border-blue-300">
        <h2 className="px-3 py-5 text-lg font-bold">{title}</h2>
        <img src={image} alt={keywords} />
        <p className="px-3 py-5">{content}</p>
      </main>
    )
  }
  return (
    <article className={`pb-3 mb-3 ${last ? "" : "border-b border-blue-300"}`}>
      <h2 className="px-3 py-5 text-lg font-bold">{title}</h2>
      {image && <img src={image} alt={keywords} />}
      <p className="px-3 py-5">{content}</p>
    </article>
  )
}

export default Article
