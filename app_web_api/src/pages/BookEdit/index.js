import './style.css'

import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

export function BookEdit() {

    // Recuperando o id da url
    const { id } = useParams();
    const navigate = useNavigate()

    /* State de dados das categorias vindas do aqruivo db,json */
    // const [categories, setCategories] = React.useState([]);
    const [book, setBook] = React.useState({})


    // /* Recupera os dados de categoria do arquivo db,json */
    // React.useEffect(() => {
    //     fetch(
    //         'http://localhost:5000/categories',
    //         {
    //             method: 'get',
    //             headers: {
    //                 'content-type': 'application/json'
    //             }
    //         }).then(
    //             (resp) => resp.json()
    //         ).then((data) => {
    //             setCategories(data);
    //             console.log(data);
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    // }, [])

    // Recuperando os dados de livro para edição
    React.useEffect(() => {
        fetch(`http://localhost:5000/listagemLivro/${id}`, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            },
        }).then(
            (resp) => resp.json()
        ).then((data) => {
            setBook(data.data);
            console.log(data)
        }).catch((error) => {
            console.log(error)
        });

    }, [id]);


    /* Handler de captura dos dados de input (nomde do livro, autor, descrição) */
    function handlerOnChangeBook(event) {
        setBook({ ...book, [event.target.name]: event.target.value });
    }

    function handlerOnSubmitEdit(e) {
        e.preventDefault()

        fetch(`http://localhost:5000/alterarLivro`, {
            method: 'PUT',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            },
            body: JSON.stringify(book)
        }).then(
            (resp) => resp.json()
        ).then((data) => {
            console.log(data)
            navigate('/books', {
                state: {
                    message: "Livro alterado com SUCESSO!",
                    type: "success"
                }
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    return (

        <div className="book_container">
            <h1>Edição de Livro</h1>

            <form onSubmit={handlerOnSubmitEdit}>

                <Input
                    type="text"
                    name="nome_livro"
                    id="title"
                    placeholder="Digite o titulo do livro"
                    text="Digite o titulo do livro"
                    value={book.nome_livro}
                    handlerOnChange={handlerOnChangeBook}
                />

                <Input
                    type="text"
                    name="autor_livro"
                    id="author"
                    placeholder="Digite o nome do autor"
                    text="Digite o nome do autor"
                    value={book.autor_livro}
                    handlerOnChange={handlerOnChangeBook}
                />

                <Input
                    type="text"
                    name="descricao_livro"
                    id="description"
                    placeholder="Digite a descricao do livro"
                    text="digite a descricao do livro"
                    value={book.descricao_livro}
                    handlerOnChange={handlerOnChangeBook}
                />

                {/* <Select
                    name="category"
                    id="category"
                    text="Selecione a categoria do livro"
                    options={categories}
                    handlerOnChange={handlerChangeCategory}
                /> */}

                <p><input type='submit' value="Editar" /></p>

            </form>

        </div>

    );
}