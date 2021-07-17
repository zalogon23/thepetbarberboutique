import { useEffect, useState } from 'react'
import { ApolloProvider } from '@apollo/client';
import 'tailwindcss/tailwind.css'
import PopUp from '../components/PopUp'
import client from '../lib/client';

function MyApp({ Component, pageProps }) {

  const timeBeforeShowingTheEmailPopUp = 12000;

  const [closed, setClosed] = useState(true)
  useEffect(() => {
    if (!localStorage.getItem("sentEmail")) {
      setTimeout(() => {
        setClosed(false)
      }, timeBeforeShowingTheEmailPopUp)
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      {!closed && <PopUp close={() => setClosed(true)} />}
    </ApolloProvider>
  )
}

export default MyApp
