import { useContext, useState } from "react"
import ContactContext from "../context/ContactContext";

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [error, setError] = useState(false);

    const { contactos, setContactos } = useContext(ContactContext);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const id = generarId();

    const handleSubmit =  (e) => {
        e.preventDefault();
        
        if ([nombre, email, telefono].includes('')) {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 6000);
            return
        }

        const objetoContacto = {
            nombre, 
            email,
            telefono,
            id
        }

        // Nuevo registro
        setContactos([...contactos, objetoContacto]);

        setNombre('');
        setEmail('');
        setTelefono('');
    }

    return (
        <div className="container-form">
            <h2 className="sub-title">Ingrese el Contacto</h2>

            { error && <p className="error">Todos los campos son obligatorios</p> }

            <form 
                className="formulario"
                onSubmit={handleSubmit}
            >
                <div className="container-label-input">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text"
                        placeholder="Nombre del contacto"
                        id="nombre"
                        onChange={e => setNombre(e.target.value)} 
                        value={nombre}
                    />
                </div>
                <div className="container-label-input">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        placeholder="Email del contacto"
                        id="email"
                        onChange={e => setEmail(e.target.value)} 
                        value={email}
                    />
                </div>
                <div className="container-label-input">
                    <label htmlFor="telefono">Telefono</label>
                    <input 
                        type="number"
                        placeholder="Numero del contacto"
                        id="telefono"
                        onChange={e => setTelefono(e.target.value)}
                        value={telefono}
                    />
                </div>

                <input type="submit" className="btn-submit" value="Agregar Contacto" />
            </form>
        </div>
  )
}

export default Formulario