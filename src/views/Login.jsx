import { useState } from "react"
import { useAuthContext } from "../context/authContext"

const Login = () => {
    const {login} = useAuthContext()
    const [magicWord, setMagicWord] = useState('')
    const handleInputChange = (event) => {
        setMagicWord(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(magicWord);
        if(magicWord === '123456789') login()
    }
    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={magicWord} onChange={handleInputChange} />
            <button type="submit">Iniciar sesion</button>
        </form>
        </>
    )
}

export default Login