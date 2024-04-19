import * as React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom'
import { Message } from '../../components/Message'
import { BookCard } from '../../components/BookCard'

export function Books() {
  const location = useLocation()
  // const [type, setType] = React.useState(false)

  return (
    <section className="books_container">
      <h1>Aqui vai ser listado seus livros</h1>
      <Message msg={location.state ? location.state.message : ""} type={location.state ? location.state.type : "error"} />
      <BookCard />
    </section>
  )
}
