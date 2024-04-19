import * as React from 'react'
import './style.css'

export function BookCard() {

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
                console.log(data)
            }).catch(
                (error) => console.log(error)
            )
    }, [])

    const cards = books.map((e) => {
        return (
            <div id={e.id} key={e.id} className='book_card'>
                <h4>{e.title}</h4>
                <p>{e.author}</p>
            </div>
        )
    })

    return (
        <div>
            {cards}
        </div>
    )
}