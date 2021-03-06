import React from 'react'

function PostCard({ title, content, formats, keywords }) {
  return (
    <article className="overflow-hidden rounded break-words bg-blue-600 flex flex-col items-center shadow-xl pt-2 my-1">
      <h3 className="p-2 text-center text-2xl text-white font-bold">{title}</h3>
      {formats && <img className="mt-4 w-full max-h-96 object-cover" src={formats.medium.url || formats.small.url} alt={keywords} />}
      <div style={{ lineHeight: "1.8em" }} className="px-2 sm:px-4 py-3 text-gray-400 bg-white w-full h-40" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default PostCard
