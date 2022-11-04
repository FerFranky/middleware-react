import { Link } from "react-router-dom"
import { LOGOUT } from "../config/routes/paths"
const Private = () => {
    return(
        <>
        <h1>Private</h1>
        <Link to={LOGOUT}>Cerrar sesion</Link>
        </>
    )
}

export default Private