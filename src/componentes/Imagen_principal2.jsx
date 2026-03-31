
// 5TO COMPONENTE : NUESTRA IMAGEN PRINCIPAL2 DE SOFA Y CAFE 

import styl from "../estilos/estilos.module.css";

import miImagen from '../imagenes/imagen2.jpg'; // importamos nuestra imagen de la carpeta imagenes


// CREAMOS NUESTRA FUNCION IMAGEN2 QUE RETORNARA UNA IMAGEN DENTRO DE UN DIV
function Imagen2(){
    return(
        <div className={styl.imagen_sofa}>
            <img src={miImagen}></img>
        </div>
    )
}

// EXPORTAMOS POR DEFECTO EL COMPONENTE IMAGEN

export default Imagen2;