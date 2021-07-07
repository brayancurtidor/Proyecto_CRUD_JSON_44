import {mostraAlerta,validar}from './funciones.js'
import {nuevapersona} from './API.js'
(
    function()
    {
        const formulario=document.querySelector('#formulario')
        formulario.addEventListener('submit',validarinformacion)
        
        function validarinformacion(e)
        {
            e.preventDefault();
          const  nombrepinput=document.querySelector('#nombre_padre').value;
          const apellidopinput=document.querySelector('#apellidos_padre').value;
          const  Fechanacpinput=document.querySelector('#feha_nac_p').value;
          const  nombreMinput=document.querySelector('#nombre_madre').value;
          const  apellidosMinput=document.querySelector('#apellidos_madre').value;
          const  FechanacMinput=document.querySelector('#feha_nac_m').value;
          const  nombreNinput=document.querySelector('#nombre_nueva_persona').value;
          const   apellidosNinput=document.querySelector('#apellidos_Nueva_persona').value;
          const  FechaNacNinput=document.querySelector('#feha_nac_b').value;
          const  HoranacNinput=document.querySelector('#hora_nac').value;
          const   LugarNacNinput=document.querySelector('#Lugarnac').value;
            //validacion de los camós con un objeto
            const nuevapersonaobjeto={
            nombrepinput,
            apellidopinput,
            Fechanacpinput,
            nombreMinput,
            apellidosMinput,
            FechanacMinput,
            nombreNinput,
            apellidosNinput,
            FechaNacNinput,
            HoranacNinput,
            LugarNacNinput

            }

            if(validar(nuevapersonaobjeto))
            {
                mostraAlerta('todos los campos son obligatorios');

               
                return;
            }     
                nuevapersona(nuevapersonaobjeto);
        }
//actualizar un registro






















})();