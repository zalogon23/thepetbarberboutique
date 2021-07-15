import React from 'react'

function Article({ title, image, keywords = "pet barber boutique perros mascota corte", content, last, alternative }) {
  const paragraphColor = alternative ? "text-white" : "text-gray-500"
  const titleColor = alternative ? "text-white" : "text-blue-700"
  const backgroundColor = alternative ? " bg-blue-800 " : " bg-white"
  const bottomBorder = last ? "" : "border-b border-gray-300"

  return (
    <article className={`flex flex-col items-center overflow-hidden pb-12 break-words md:px-4 ${bottomBorder} ${backgroundColor}`}>
      <h2 className={`text-center sm:max-w-lg sm:px-0 md:text-6xl md:max-w-xl ${titleColor} py-12 px-3 text-4xl font-bold md:py-24 ${!image && "pb-4"}`}>{title}</h2>
      <div className={`md:flex ${alternative ? "md:flex-row-reverse" : "md:flex-row"} items-start`}>
        {image && <img className="sm:max-w-lg md:max-w-xs w-full" src={image} alt={keywords} />}
        <div className={`text-lg px-3 py-5 sm:max-w-lg sm:leading-10 sm:px-0 sm:text-xl md:text-2xl md:leading-10 md:pb-24 md:pt-0 md:max-w-xl md:px-8 ${paragraphColor}`} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  )
}

export default Article
