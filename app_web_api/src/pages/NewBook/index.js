import * as React from 'react'
import './style.css'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { useNavigate } from 'react-router-dom'

export function NewBook() {

  const navigate = useNavigate()
  // const [categories, setCategories] = React.useState([])
  const [book, setBook] = React.useState({})

  // React.useEffect(() => {
  //   fetch( //Metodo para requisições, assim como axios manualmente
  //     'http://localhost:5000/categories', // Passando o url/route 
  //     {
  //       method: 'Get',
  //       headers: {
  //         'Content-Type': 'application/json' // Passando tipo de conteudo
  //       }
  //     }).then(
  //       (res) => res.json()
  //     ).then((data) => {
  //       setCategories(data)
  //     }).catch(
  //       (error) => console.log(error)
  //     )
  // }, []) // O array vazio é o estado inicial (A ser chamado 1°) do useEffect

  function handlerOnChangeBook(event) {
    setBook({ ...book, [event.target.name]: event.target.value })
  }

  // function handlerOnChangeSelect(event) {
  //   setBook({
  //     ...book, [event.target.name]: {
  //       id: event.target.value,
  //       name: event.target.options[event.target.selectedIndex].text
  //     }
  //   })
  // }

  function handlerOnSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:5000/inserirLivro', {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify(book)
    }).then(
      (res) => res.json()
    ).then(
      (data) => {
        console.log(data)
        navigate('/books', {
          state: {
            message: "Livro cadastrado com SUCESSO!",
            type: "success"
          }
        })
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
          name="nome_livro"
          id="title"
          placeholder="Digite o titulo do livro"
          text="Digite o titulo do livro"
          handlerOnChange={handlerOnChangeBook}
        />

        <Input
          type="text"
          name="autor_livro"
          id="author"
          placeholder="Digite o nome do autor"
          text="Digite o nome do autor"
          handlerOnChange={handlerOnChangeBook}
        />

        <Input
          type="text"
          name="descricao_livro"
          id="description"
          placeholder="Digite a descricao do livro"
          text="Digite a descricao do livro"
          handlerOnChange={handlerOnChangeBook}
        />

        {/* <Select
          name="category"
          id="category"
          options={categories}
          handlerOnChange={handlerOnChangeSelect}
          text="Escolha a categoria"
        /> */}

        <button type='submit'>Enviar</button>

      </form>
    </section>
  )
}
