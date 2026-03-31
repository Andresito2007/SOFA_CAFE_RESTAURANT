
// 8TAVO COMPONENTE : NUESTRA SECCION DE LOS PLATILLOS DE SOFA Y CAFE 

import Nav from './Nav' ; // IMPORTAMOS EL COMPONENTE NAV

import Footer from './Footer'  ; // IMPORTAMOS EL COMPONENTE FOOTER

import styl from "../estilos/estilos.module.css"; // IMPORTAMOS LOS ESTILOS.MODULES A LA VARIABLE DTYL
//EL MODULES.CSS una forma de usar CSS donde los estilos son locales al componente y podemos usarlas 

 // importamos nuestraS imagenes de la carpeta imagenes
import miImagen from '../imagenes/imagen3.jpg'; 
import miImagen2 from '../imagenes/carta1.jpg';
import miImagen3 from '../imagenes/carta2.webp';
import miImagen4 from '../imagenes/carta3.webp';

//CREAMOS NUESTRA FUNCION CARTA_SOFA QUE RETORNARA NUESTROS MENUS DISPONIBLES DE SOFA Y CAFE
function Cartaa_Sofa() {
  return (
    <section className="vip-section py-5">
      {/* NUESTRO NAV */}
      <Nav></Nav>
      {/* NUESTRA IMAGEN  */}
      <img src={miImagen}
        className={styl.imagen3}
      ></img>

      <p></p>
      {/* PRIMERA CARTA */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 order-md-1 order-2">         
            <h1 className="mb-4 text-primary">Tostones crujientes con palta fresca y huevos pochados</h1> 
            <ul>
              <li>Av. San Martín 480</li>
              <li>Horario: 8am a 11pm</li>
              <li>Extras: Menú al isntante</li>
            </ul>
          </div>
          <div className="col-md-7 mb-4 mb-md-0 order-md-2 order-1">
            <img
              src={miImagen3}
              alt="Tostones crujientes con palta fresca y huevos pochados"
              className={styl.imagen_menu}
            />
          </div>
        </div>
      </div>

      <p></p>
      {/* SEGUNDA CARTA */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 mb-4 mb-md-0">
            <img
              src={miImagen4}
              alt="Capresse Divano"
              className={styl.imagen_menu}
            />
          </div>
          <div className="col-md-5">
            <h1 className="mb-4 text-primary">Capresse Divano</h1>
            <ul>
              <li>Av. De La Roca De Vergallo 318 Paseo Fibra</li>
              <li>Precio: 200$ </li>
              <li>Extras: Menú Ejecutivo</li>
            </ul>
          </div>
        </div>
      </div>
      {/* TERCERA CARTA */}
      <p></p>
        <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 order-md-1 order-2">
            <h1 className="mb-4 text-primary">Carrot Cake</h1>
            <ul>
              <li>Av. Circunvalación del Golf los Incas 134  Patio Panorama</li>
              <li>Horario: 8am a 10pm</li>
              <li>Extras: Menú limitado</li>
            </ul>
          </div>
          <div className="col-md-7 mb-4 mb-md-0 order-md-2 order-1">
            <img
              src={miImagen2}
              alt="Carrot Cake"
              className={styl.imagen_menu}
            />
          </div>
        </div>
      </div>
      {/* NUESTRO FOOTER */}
      <Footer></Footer>
   </section>
  );
}

// EXPORTAMOS POR DEFECTO EL COMPONENTE CARTA_SOFA
export default Cartaa_Sofa;