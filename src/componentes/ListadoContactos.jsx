import { useContext } from "react"
import ContactContext from "../context/ContactContext"
import Contacto from "./Contacto"

const ListadoPacientes = () => {

    const { contactos } = useContext(ContactContext);

    return (

      <div className="container-list">
        <h2 className="sub-title">Listado Contactos</h2>

        { contactos.map( contacto => (
          <Contacto 
              key={contacto.id} 
              nombre={contacto.nombre}
              email={contacto.email}
              telefono={contacto.telefono}
              id={contacto.id}
            />
        ) ) }
      </div>
    )
}

export default ListadoPacientes
