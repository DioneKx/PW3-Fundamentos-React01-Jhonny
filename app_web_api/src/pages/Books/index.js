import * as React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom'
import { Message } from '../../components/Message'
import { BookCard } from '../../components/BookCard'

export function Books() {
  const location = useLocation()

  const [books, setBooks] = React.useState([])
  // Estado de dados da mensagem de exclusão de livros
  const [message, setMessage] = React.useState({
    msg: "",
    type: ""
  });

  React.useEffect(() => {
    if (location.state) {
      setMessage({
        msg: location.state.message,
        type: location.state.type
      })
    }
  }, [location.state])

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

  // Função de exlusão de livro
  function bookDelete(id) {

    fetch(`http://localhost:5000/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(resp => resp.json())
      .then(
        (data) => {
          setBooks(books.filter((book_data) => book_data.id !== id))
          setMessage({
            msg: 'Livro exluído com sucesso!',
            type: 'success'
          })
        }
      )
      .catch(err => console.log(err));
  }

  return (
    <section className="books_container">
      <h1>Aqui vai ser listado seus livros</h1>

      {
        message.msg && <Message
          msg={message.msg}
          type={message.type}
        />
      }

      {books.length > 0 ? books.map((e, index) => {
        return (
          <BookCard id={e.id} key={e.id} book={e.title} author={e.author} category={e.category} handlerDelete={bookDelete} />
        )
      }) : <></>}
    </section>
  )
}
