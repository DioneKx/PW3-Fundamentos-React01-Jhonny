import * as React from 'react';
import './style.css';


function FormRegister() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function cadastro(event) {
        event.preventDefault();
        // alert('monke cadastred')
        alert(`nome: ${name} EMAIL: ${email} senha: ${password}`)
    }

    return (
        <div className="FormRegister-container">

            <h1>Formulario de cadastro</h1>

            <form onSubmit={cadastro} className='FormRegister-form'>

                <div className='FormRegister-content-inputs'>
                    <input
                        type='text'
                        required
                        placeholder='Digite seu nome...'
                        value={name}
                        className='FormRegister-input'
                        onChange={(event) => { setName(event.target.value) }}
                    >

                    </input>

                    <input
                        type='text'
                        required
                        placeholder='Digite seu email...'
                        value={email}
                        className='FormRegister-input'
                        onChange={(event) => { setEmail(event.target.value) }}
                    >
                    </input>

                    <input
                        type='password'
                        required
                        placeholder='Digite sua senha...'
                        value={password}
                        className='FormRegister-input'
                        onChange={(event) => { setPassword(event.target.value) }}
                    >
                    </input>
                </div>

                <div className='FormRegister-content-btn'>
                    <button type='submit' className='FormRegister-button'>
                        Cadastrar
                    </button>
                </div>

            </form>
        </div>
    );
}

export default FormRegister;
