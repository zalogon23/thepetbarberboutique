import React from 'react'

function Article({ title, image, keywords = "pet barber boutique perros mascota corte", content, main = false, last, model = "default" }) {
  const textColor = "text-gray-500"
  if (main) {
    return (
      <main className={`pb-5 ${last ? "" : "border-b border-gray-300"}`}>
        <h2 className={`text-blue-700 py-12 px-3 text-4xl font-bold ${!image && "pb-4"}`}>{title}</h2>
        {image && <img src={image} alt={keywords} />}
        <p className={"px-3 py-5 " + textColor}>{content}</p>
      </main>
    )
  }
  if (model === "default") {
    return (
      <article className={`pb-5 mb-3 ${last ? "" : "border-b border-gray-300"}`}>
        <h2 className="text-blue-700 px-3 py-12 text-4xl font-bold">{title}</h2>
        {image && <img src={image} alt={keywords} />}
        <p className={"px-3 py-5 " + textColor}>{content}</p>
      </article>
    )
  }
  if (model === "inverse") {
    return (
      <article className={`pb-5 mb-3 ${last ? "" : "border-b border-gray-300"}`}>
        {image && <img src={image} alt={keywords} />}
        <h2 className="text-blue-700 px-3 py-12 text-4xl font-bold">{title}</h2>
        <p className={"px-3 py-5 " + textColor}>{content}</p>
      </article>
    )
  }
}

export default Article
