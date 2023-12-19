import { notFound } from 'next/navigation'
import React from 'react'


type Props  = {
    params : {
        term: string
    }
}

const page = ({params: {term}} : Props) => {
    
    const termToUse = decodeURI(term)

    //Api Call  To Get Searched Movies
    //Api Call To Get Popular Movies
    
  return (
    <section>
        <p>Welcome To Search Page : {termToUse}</p>
    </section>
  )
}

export default page