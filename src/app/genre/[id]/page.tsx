import React from 'react'

type Props = {
    params: {
        id:string
    },
    searchParams:{
        genre:string
    }
}

const GenrePage = ({ params: { id}, searchParams: { genre} }: Props) => {
    
  return (
    <section>
        <p>GenrePage</p>
        <p>Welcome To Genre With Id : {id} And SearchParams genre : {genre}</p>
    </section>
  )
}

export default GenrePage