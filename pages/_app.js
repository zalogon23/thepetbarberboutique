import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import PopUp from '../components/PopUp'

function MyApp({ Component, pageProps }) {

  const timeBeforeShowingTheEmailPopUp = 10000;

  const [closed, setClosed] = useState(true)
  useEffect(() => {
    if (!localStorage.getItem("sentEmail")) {
      setTimeout(() => {
        setClosed(false)
      }, timeBeforeShowingTheEmailPopUp)
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
      {!closed && <PopUp close={() => setClosed(true)} />}
    </>
  )
}

export default MyApp
