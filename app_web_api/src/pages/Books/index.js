import * as React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom'
import { Message } from '../../components/Message'
import { BookCard } from '../../components/BookCard'

export function Books() {
  const location = useLocation()
  let message = ""; let type = ""


  if (location.state) {
    message = location.state.message
    type = location.state.type
  }

  const [books, setBooks] = React.useState([])

  React.useEffect(() => {
    fetch(
      'http://localhost:5000/books',
      {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(
        (res) => res.json()
      ).then((data) => {
        setBooks(data)
      }).catch(
        (error) => console.log(error)
      )
  }, [])

  return (
    <section className="books_container">
      <h1>Aqui vai ser listado seus livros</h1>

      {
        message && <Message
          type={type}
          msg={message}
        />
      }

      {books.length > 0 ? books.map((e, index) => <BookCard id={e.id} key={index} book={e.title} author={e.author} category={e.category} />) : <></>}
    </section>
  )
}
