import * as React from 'react'
import './style.css'

export function Message({ type, msg }) { // {<var>} = props (chama a var igual um objeto normal || chama a var atraves de pros.<var>)
    const [visible, setVisible] = React.useState(false)


    React.useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [msg])

    return (
        // {``} chama-se: template string
        <> {/* "if ternário" sem else (Boolean). Precisa estar sempre dentro de um elemento pra funcionar (?) */} 
            {visible && (
                <div className={`message ${type}`} >
                    <p>{msg}</p>
                </div>
            )}

        </>
    )
}