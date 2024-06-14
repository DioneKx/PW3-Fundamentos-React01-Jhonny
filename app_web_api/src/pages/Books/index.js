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
      'http://localhost:5000/listagemLivros',
      {
        method: 'Get',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        }
      }).then(
        (res) => res.json()
      ).then((data) => {
        console.log(data.data)
        setBooks(data.data)
      }).catch(
        (error) => console.log(error)
      )
  }, [])

  // Função de exlusão de livro
  function bookDelete(id) {
    fetch(`http://localhost:5000/excluirLivro/${id}`, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then(resp => resp.json())
      .then(
        (data) => {
          setBooks(books.filter((book_data) => book_data.cod_livro !== id))
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

      <div className='books_card_container'>
        {books.length > 0 ? books.map((e, index) => {
          return (
            <BookCard id={e.cod_livro} key={e.cod_livro} book={e.nome_livro} author={e.autor_livro} description={e.descricao_livro} handlerDelete={bookDelete} />
          )
        }) : <></>}
      </div>
    </section>
  )
}
