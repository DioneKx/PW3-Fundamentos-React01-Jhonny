import * as React from 'react'
import './style.css';
import axios from 'axios'

function CardUser() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
            .then((response) => {  // then e catch funciona igual a try e catch
                setUsers(response.data.data)
                console.log(response)
            })
            .catch((error) => { alert(error) })
    }, [])

    return (
        <div className="CardUser-container">
            {users.map((user) => (
                <div className='CardUser-card'>

                    <div className="CardUser-content-img">
                        <img src={user.avatar} alt='Imagem de Perfil' className='CardUser-img'/>
                    </div>

                    <div className="CardUser-content-info">
                        <h4>Nome: {user.first_name + " " + user.last_name}</h4>
                        <p>Email: {user.email}</p>
                    </div>

                </div>
            ))}
        </div >
    );
}

export default CardUser;
