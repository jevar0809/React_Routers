
/* usado para la raiz del render */
import ReactDOM from 'react-dom/client';

/* componentes de react routers */
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

/* componentes de la app, de la hoja "componentes.jsx" */
import { Inicio, Blog, Tienda, Error404 } from './componentes.jsx'

/* estilos */
import styled from 'styled-components';
import './index.css';




/* se crea la raiz del proyecto */
const ROOT = ReactDOM.createRoot(document.getElementById('root'));


/* 


luego se usa el componente <BrowserRouter> que debe encerrar todos los demas componentes que se usan para las rutas. 
<BrowserRouter> <App /> </BrowserRouter>, siendo 'App' la aplicacion de ejemplo


Usando el elemento 'nav' podemos dejar alli las rutas de la app, es decir los elementos 'a'
Pero para cada ruta o link en vez de usar la etiqueta 'a' usamos el componente 'NavLink' con su propiedad 'to' usada para que aparezca en la barra de direcciones la ruta deseada: <NavLink to=''> RUTA <NavLink> 



Lo anterior se usa para que aparezca un menu de rutas listas para navegar, pero para que el contenido de cada ruta aparezca en el cuerpo de la pagina hacemos lo siguiente:

Podemos usar componentes para cada contenido de las rutas o links o podemos hacer cada contenido dentro del mismo codigo ( lo mejor es hacer un componente para cada contenido ).

Por ejemplo: supongamos que una ruta o link nos dirige a un articulo de inicio, otra ruta a un blog y otra a una tienda, por supuesto queremos que cada ruta muestre dicho contenido, este contenido se puede hacer en un componente para luego llamarlo o podemos hacer que cada contenido este dentro del mismo codigo pero esto haria un caos...


Una vez tengamos el contenido para cada ruta, o cada componente con su contenido, estos los debemos encerrar en un componente <Routes>, en plural, pero cada componente con su contenido lo debemos encerrar dentro del componente <Route>, en singular, usando su propiedad 'path' donde colocamos exactamente lo mismo que se coloco en la propiedad 'to' del componente <NavLink>, ademas debemos usar otro componente llamado 'element' donde colocaremos el componente con cada contenido dentro de llaves  






CONCLUSION 

1) <BrowserRouter> <App /> </BrowserRouter>
Toda la app dede estar encerrada en el componente <BrowserRouter>




2) 
<nav>
  <NavLink to='/'>Inicio</NavLink> 
  <NavLink to='/blog'>Blog</NavLink>
  <NavLink to='/tienda'>Tienda</NavLink>
</nav>

La ruta <a> es reemplazada por el componente <NavLink> y la propiedad 'href' por la propiedad 'to'

La propiedad 'to' se usa para que aparezca en la barra de direcciones la ruta escojida y ademas le indica a la propiedad 'path' que contenido debe verse en la pantalla 

Las rutas <NavLink> deberan estar, semanticamente, dentro de un elemento <nav>








3) 
<Routes>
  <Route path='/' element={ <Inicio /> }/>
  <Route path='/blog' element={ <Blog /> }/>
  <Route path='/tienda' element={ <Tienda /> }/>
  <Route path='*' element={ <Error404 /> } />
</Routes>

Todas las rutas de la pagina debe estar dentro del componente <Routes>

Cada ruta debe estar dentro del componente <Route> y el 'path' trae el contenido al que esta apuntando la barra de direcciones, en otras palabras, si la barra de direcciones apunta a la ruta /blog (esta ruta /blog es la que tiene el 'to'), 'path' cargara el contenido de dicha direccion. Por eso las propiedades 'to' y 'path' deben ser las mismas 

Podemos hacer que 'path' muestre un error en la pagina si el usuario manipula la barra de direcciones apuntando a un 'to' que no existe 


La propiedad 'element' tendra el componente con el contenido de cada ruta 

*/






function App(){/* toda la app debera estar dentro del componente <BrowserRouter> */
    return  (
        <Contenedor>{/* 'Contenedor' es el componente usado para los estilos, usando styled component  */}
            <Menu>{/* 'Menu' es un componente del elemento 'nav' usado para los estilos usando styled component */}
              <NavLink to='/'>Inicio</NavLink> {/* 'NavLink' y 'to' reemplazan el elemento '<a href='#'> Inicio </a>' */}
              <NavLink to='/blog'>Blog</NavLink>
              <NavLink to='/tienda'>Tienda</NavLink>
            </Menu>

            <main>
                <Routes>{/* en Routes colocamos todas las rutas */}
                    <Route path='/' element={ <Inicio /> }/>{/* en Route colocamos el contenido de cada ruta */}
                    <Route path='/blog' element={ <Blog /> }/>
                    <Route path='/tienda' element={ <Tienda /> }/>
                    <Route path='*' element={ <Error404 /> } />{/* muestra el error si 'path' no coincide con nada de 'to' */}
                </Routes>
            </main>

            <aside>
                <h3>carrito proximamente</h3>
            </aside>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;

    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }

    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;




/* BrowserRouter, en este caso, encierra todo el componente 'App' , de arriba, que contiene las rutas */
ROOT.render(
    <BrowserRouter> 
        <App />
    </BrowserRouter>
)
















