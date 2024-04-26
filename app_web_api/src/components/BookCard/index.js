import * as React from 'react'
import './style.css'

export function BookCard({ id, book, author, category }) {

    // const cards = books.map((e) => (
    //     <div id={e.id} key={e.id} className='book_card'>
    //         <h4>{e.title}</h4>
    //         <p>{e.author}</p>
    //     </div>
    // ))

    return (
        <div className='book_card' id={id} key={id}>
            <h4>{book}</h4>

            <p>Autor: {author}</p>
            <p className='category_text'>
                <span></span>
                Categoria: {category.name}
            </p>
        </div>
    )
}