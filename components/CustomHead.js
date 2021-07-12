import React from 'react'
import Head from "next/head"

function CustomHead({ children }) {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Aclonica&display=swap" rel="stylesheet" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" /> */}
      {children}
    </Head>
  )
}

export default CustomHead
