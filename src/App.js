import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";
import { useState } from "react";

function App() {

    const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Pelis</h1>
        </header>


        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>


        {/*Contenido Principal*/}
        <section id="content" className="content">
            {/*Aqui va el listado de peliculas*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>


        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState} />


            <Crear setListadoState ={setListadoState} />
        </aside>

        {/*Pie de Pagina*/}
        <footer className="footer">
            &copy; Máster en Javascript ES12 y React - <a href="/#">pabloavilaweb.cl</a>
        </footer>

    </div>
  );
}

export default App;
