import React from 'react'

function Article({ title, image, keywords = "pet barber boutique perros mascota corte", content, last, alternative }) {
  const paragraphColor = alternative ? "text-white" : "text-gray-500"
  const titleColor = alternative ? "text-white" : "text-blue-700"
  const backgroundColor = alternative ? " bg-blue-800 " : " bg-white"
  const bottomBorder = last ? "" : "border-b border-gray-300"

  return (
    <article className={`pb-5 ${bottomBorder} ${backgroundColor}`}>
      <h2 className={`${titleColor} py-12 px-3 text-4xl font-bold ${!image && "pb-4"}`}>{title}</h2>
      {image && <img src={image} alt={keywords} />}
      <div className={`px-3 py-5 ${paragraphColor}`} dangerouslySetInnerHTML={{__html: content}} />
    </article>
  )
}

export default Article
