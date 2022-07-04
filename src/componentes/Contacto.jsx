import { useContext } from "react"
import ContactContext from "../context/ContactContext"


const Contacto = ({ nombre, email, telefono, id }) => {

    const { eliminarContacto } = useContext(ContactContext);

    const handleEliminar = () => {
        eliminarContacto(id);
    }

    return (
        <div className="listado-contactos">
            <p className="name-list">Nombre: <span>{nombre}</span></p>
            <p className="name-list">Email: <span>{email}</span></p>
            <p className="name-list">Telefono: <span>{telefono}</span></p>

            <div className="container-contact-button">
                <button className="eliminar" type="button" onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
  )
}

export default Contacto
