// 2DO COMPONENTE : NUESTRA IMAGEN PRINCIPAL DE SOFA Y CAFE 

import styl from "../estilos/estilos.module.css"; //IMPORTAMOS POR MODULES.CSS PARA DARLE ESTILO A NUESTRA IMAGEN

//EL MODULES.CSS una forma de usar CSS donde los estilos son locales al componente y podemos usarlas 
// en una variable y acceder a cada estilos por propiedad con el (.) .

import miImagen from '../imagenes/imagen1.jpg'; // importamos nuestra imagen de la carpeta imagenes
// ../ eso es para salir de nuestro archivo y buscar en la carpeta imagenes la imagen requerida


// CREAMOS NUESTRA FUNCION IMAGEN PRINC. QUE RETORNARA UNA IMAGEN DENTRO DE UN DIV
function Imagen_principal() {
  return (
    <div className={styl.img}>
      <img src={miImagen}></img>
    </div>
  );
}

// EXPORTAMOS POR DEFECTO EL COMPONENTE IMAGEN_PRINCIPAL
export default Imagen_principal;
