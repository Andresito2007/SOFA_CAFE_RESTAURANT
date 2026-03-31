
// 6TO COMPONENTE : NUESTRA SECCION DE ATENCION DE SOFA Y CAFE 

import { Link } from "react-router-dom"; //Para navegar entre nuestras paginas
import styl from "../estilos/estilos.module.css"; //IMPORTAMOS POR MODULES.CSS PARA DARLE ESTILO A NUESTRA IMAGEN
import miImagen from '../imagenes/atencion.jpg'; // importamos nuestra imagen de la carpeta imagenes

// CREAMOS NUESTRA FUNCION SECCION_RESERVAS 
function Seccion_Reservas(){
    return (
      <div className={styl.seccion_atencion}>
         <div className={styl.fondo}>
               <div className="container">
                 <div className="row align-items-center">
                   <div className={`col-md-7 mb-4 mb-md-0 `}>
                     <p></p>
                     <img
                       src={miImagen}
                       alt="seccion atencion"
                       className="img-fluid rounded shadow"
                     />
                    </div>
                    <div className="col-md-5">
                     <h1 className="mb-4 text-warning">LISTOS PARA ATENDERTE</h1>
                     <p>De lunes a domingo</p>
                     <p>10:00 am a 10:45 pm</p>
                     <p>Apuesta por la Creatividad en todas sus formas</p>
                        <Link to="/login" className={styl.btnOutline}>
                            REGISTRARSE
                        </Link>
                   </div>
                 </div>
               </div>
          </div>
      </div>
    )
}

// EXPORTAMOS POR DEFECTO EL COMPO SECCION RESERVA
export default Seccion_Reservas