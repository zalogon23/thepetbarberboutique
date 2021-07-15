import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import PopUp from '../components/PopUp'

function MyApp({ Component, pageProps }) {

  const [closed, setClosed] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setClosed(false)
    }, 3000)
  }, [])

  return (
    <>
      <Component {...pageProps} />
      {!closed && <PopUp close={() => setClosed(true)} />}
    </>
  )
}

export default MyApp
