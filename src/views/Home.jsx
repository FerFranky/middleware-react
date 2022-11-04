import { Link } from "react-router-dom"
import { LOGIN } from "../config/routes/paths"
const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <Link to={LOGIN}>Iniciar sesion</Link>
        </>
    )
}

export default Home