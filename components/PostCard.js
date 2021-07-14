import React from 'react'

function PostCard({ title, content, image = "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp", keywords = "perro" }) {
  return (
    <article className="bg-blue-500 flex flex-col items-center shadow-xl pt-2 my-1">
      <h3 className="p-2 text-center text-2xl text-white font-bold">{title}</h3>
      {image && <img className="mt-4 w-full" src={image} alt={keywords} />}
      <div className="px-2 py-3 text-black bg-white w-full" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default PostCard
