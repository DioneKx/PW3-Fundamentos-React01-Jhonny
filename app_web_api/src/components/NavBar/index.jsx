import { Link, Outlet } from 'react-router-dom'
import './style.css'

import { Container } from '../Container'

export function NavBar() {
    return (
        <div>
            <Container>
                <ul className="list">
                    <li className="item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="item">
                        <Link to='/books'>Livros</Link>
                    </li>
                    <li className="item">
                        <Link to='/newbooks'>CadastrarLivro</Link>
                    </li>
                    {/* <li className="item">

                    </li> */}
                </ul>
            </Container>
            <Outlet />
        </div>
    )
}