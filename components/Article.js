import React from 'react'

function Article({ title, formats, links, keywords = "pet barber boutique perros mascota corte", content, last, alternative }) {
  const paragraphColor = alternative ? "text-white" : "text-gray-500"
  const titleColor = alternative ? "text-white" : "text-blue-700"
  const backgroundColor = alternative ? " bg-blue-800 " : " bg-white"
  const bottomBorder = last ? "" : "border-b border-gray-300"
  const buttonFeatures = alternative ? "bg-blue-800 text-white border-white hover:bg-white hover:text-blue-800" : "hover:bg-blue-800 hover:text-white border-blue-800 bg-white text-blue-800"

  return (
    <article className={`flex flex-col items-center overflow-hidden pb-12 break-words md:px-4 ${bottomBorder} ${backgroundColor}`}>
      <h2 style={{ lineHeight: "1.2em" }} className={`text-center sm:max-w-lg sm:px-0 md:text-6xl md:max-w-4xl ${titleColor} py-8 px-3 text-2xl font-aclo font-bold md:py-24 ${!formats && "pb-4 md:py-12"}`}>{title}</h2>
      <div className={`md:flex ${alternative ? "md:flex-row-reverse" : "md:flex-row"} items-start`}>
        {formats && <img className="md:rounded sm:max-w-lg md:max-w-xs lg:max-w-md w-full md:mt-3" src={formats.medium.url || formats.small.url} alt={keywords} />}
        <div style={{ lineHeight: "1.5em" }} className={`text-lg px-3 py-5 sm:max-w-lg sm:px-0 sm:text-xl md:text-2xl md:pb-16 md:pt-0 md:max-w-xl md:px-12 lg:px-16 ${paragraphColor}`} dangerouslySetInnerHTML={{ __html: content }} />
        {/* `<img className="md:rounded sm:max-w-lg md:max-w-xs lg:max-w-md w-full md:mt-3" src=${formats.medium.url || formats.small.url} alt=${keywords} /> ${content}`}} /> */}
      </div>
      {
        links &&
        <div className="pt-6">
          {
            links.map(oneLink => (
              <a className={`py-3 px-5 border ${buttonFeatures} rounded`} href={oneLink.url}>{oneLink.text}</a>
            ))
          }
        </div>
      }
    </article>
  )
}

export default Article
