import './styles/app.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ListadoPacientes from './componentes/ListadoContactos';
import ContactContext from './context/ContactContext';
import { useEffect, useState } from 'react';

function App() {

  const [contactos, setContactos] = useState([])

  useEffect(() => {
    const obtenerLS = () => {
      const LSContactos = JSON.parse(localStorage.getItem('contactos')) ?? [];
      setContactos(LSContactos)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify( contactos ));
  }, [contactos])

  const eliminarContacto = id => {
    const contactosActualizados = contactos.filter( contacto => contacto.id !== id);
    setContactos(contactosActualizados);
  }

  return (
    <ContactContext.Provider value={{ contactos, setContactos, eliminarContacto }}>
      <div className='container'>
        <Header />
        <div className='container-form-list'>
          <Formulario />
          <ListadoPacientes />
        </div>
      </div>
    </ContactContext.Provider>
  )
}

export default App
