// 10MO COMPONENTE : NUESTRA SECCION DE LOGUEO DE SOFA Y CAFE 

import styl from "../estilos/estilos.module.css"; // IMPORTAMOS LOS ESTILOS.MODULES A LA VARIABLE DTYL
//EL MODULES.CSS una forma de usar CSS donde los estilos son locales al componente y podemos usarlas 

import Nav from './Nav'; // IMPORTAMOS NUESTRA BARRITA DE NAVEGACION

import miImagen from '../imagenes/reservas.jpeg'; // importamos nuestra imagen de la carpeta imagenes
// ../ eso es para salir de nuestro archivo y buscar en la carpeta imagenes la imagen requerida

import Footer from './Footer'; // IMPORTAMOS NUESTRA SECCION FINAL DE LA PAGINA WBE

// CREMOA NUESTRA FUNCION RESERVAS QUE RETORNARA UNA SECCION DONDE PODREMOS RESERVAR (NO IMPLEMENTADO TDV)
function Reservas(){
    return(
        <div>
           <Nav></Nav>
           <img src={miImagen}
               className={styl.seccion_reservacion}
           ></img>
           <Footer></Footer>
        </div>
    )
}

// EXPORTAMOS POR DEFECTO EL COMPONENTE RESERVAS
export default Reservas