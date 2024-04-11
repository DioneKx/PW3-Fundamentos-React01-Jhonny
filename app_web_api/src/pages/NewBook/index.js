import * as React from 'react'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { useNavigate } from 'react-router-dom'

import './style.css'

export function NewBook() {

  const navigate = useNavigate()
  const [categories, setCategories] = React.useState([])
  const [book, setBook] = React.useState({})

  React.useEffect(() => {
    fetch( //Metodo para requisições, assim como axios manualmente
      'http://localhost:5000/categories', // Passando o url/route 
      {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json' // Passando tipo de conteudo
        }
      }).then(
        (res) => res.json()
      ).then((data) => {
        setCategories(data)
        console.log(data)
      }).catch(
        (error) => console.log(error)
      )
  }, []) // O array vazio é o estado inicial (A ser chamado 1°) do useEffect

  function handlerOnChangeBook(event) {
    setBook({ ...book, [event.target.name]: event.target.value })
  }

  function handlerOnChangeSelect(event) {
    setBook({
      ...book, [event.target.name]: {
        id: event.target.value,
        name: event.target.options[event.target.selectedIndex].text
      }
    })
  }

  function handlerOnSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    }).then(
      (res) => res.json()
    ).then(
      (data) => {
        console.log(data)
        navigate('/books', data)
      }
    ).catch(
      (error) => console.log(error)
    )
  }

  return (
    <section className="newbook_container">
      <h1>Cadastre livro</h1>

      <form onSubmit={handlerOnSubmit}>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Digite o titulo do livro"
          text="Digite o titulo do livro"
          // value={book}
          handlerOnChange={handlerOnChangeBook}
        />

        <Input
          type="text"
          name="author"
          id="author"
          placeholder="Digite o nome do autor"
          text="Digite o nome do autor"
          handlerOnChange={handlerOnChangeBook}
        />

        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Digite a descricao do livro"
          text="digite a descricao do livro"
          handlerOnChange={handlerOnChangeBook}
        />

        <Select
          name="category"
          id="category"
          options={categories}
          handlerOnChange={handlerOnChangeSelect}
          // value={}
          text="testando"
        />

        <button type='submit'>Enviar</button>

      </form>
    </section>
  )
}
