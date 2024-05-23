import * as React from 'react'
import './style.css'

import { Link } from 'react-router-dom';

export function BookCard({ id, book, author, category, handlerDelete }) {

    const bookDelete = (event) => {
        event.preventDefault();
        handlerDelete(id);
    }

    return (
        <div className='book_card' id={id} key={id}>
            <h4>{book}</h4>

            <p>Autor: {author}</p>
            <p className='category_text'>
                <span></span>
                Categoria: {category.name}
            </p>

            <div className="book_card_actions">

                <Link to={`/editBook/${id}`}>
                    Editar
                </Link>

                <button onClick={bookDelete}>
                    Excluir
                </button>
                
            </div>
        </div>
    )
}