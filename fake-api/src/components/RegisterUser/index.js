import * as React from 'react'
import './style.css';
import axios from 'axios'

function RegisterUser() {

    const [name, setName] = React.useState("")
    const [job, setJob] = React.useState("")

    function createUser(e) {
        e.preventDefault();

        let user = { name: name, job: job }
        // alert(JSON.stringify(user)) // O stringfy converteu o JSON para ser recebido

        axios.post('https://reqres.in/api/users', user)
            .then((response) => {
                console.log(response)
                alert(JSON.stringify(response.data))
            }).catch((error) => {console.log(error); alert(error)})

    }

    return (
        <div className="RegisterUser-container">
            <h3>Formulário de Cadastro</h3>

            <form className="RegisterUser-form" onSubmit={createUser}> {/* o nome da função com "()" a ativa automaticamente (apenas com o form?) */}

                <div className='RegisterUser-content-inputs'>
                    <input
                        type='text'
                        placeholder='Digite seu nome...'
                        value={name}
                        className='RegisterUser-input'
                        onChange={(e) => { setName(e.target.value) }}
                    />

                    <input
                        type='text'
                        placeholder='Digite sua profissão...'
                        value={job}
                        className='RegisterUser-input'
                        onChange={(e) => { setJob(e.target.value) }}
                    />
                </div>

                <div className='RegisterUser-content-btn'>
                    <button type='submit' className='RegisterUser-button'>
                        Cadastrar
                    </button>
                </div>
            </form >
        </div>
    );
}

export default RegisterUser;
