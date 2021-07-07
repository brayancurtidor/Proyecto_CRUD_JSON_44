import {obtnerunapersona,editarPerosna}from './API.js'
import {mostraAlerta,validar}from './funciones.js'
(function(){
    //cmpoa del formulario
    const  nombrepinputs=document.querySelector('#nombre_padre')
    const apellidopinputs=document.querySelector('#apellidos_padre')
    const  Fechanacpinputs=document.querySelector('#feha_nac_p')
    const  nombreMinputs=document.querySelector('#nombre_madre')
    const  apellidosMinputs=document.querySelector('#apellidos_madre')
    const  FechanacMinputs=document.querySelector('#feha_nac_m')
    const  nombreNinputs=document.querySelector('#nombre_nueva_persona')
    const   apellidosNinputs=document.querySelector('#apellidos_Nueva_persona')
    const  FechaNacNinputs=document.querySelector('#feha_nac_b')
    const  HoranacNinputs=document.querySelector('#hora_nac')
    const   LugarNacNinputs=document.querySelector('#Lugarnac')
    const   ids=document.querySelector('#id')
    //sacar el id de la url 
    document.addEventListener('DOMContentLoaded',async()=>{
        const parametroURL=new URLSearchParams(window.location.search);
        const idPersona=parseInt(parametroURL.get('id'));
       const perosnaeditar= await obtnerunapersona(idPersona);
       //console.log(perosnaeditar) esto me sirve para ver el promesa pendiente y pra despues agregar el async en el padfre y el wait y ersolver ese problrma
        mostrarPerosna(perosnaeditar) //funcion que muestra solo un registro dependiendo del id
        //submit al formulario
        const formulario=document.querySelector('#formulario')
        formulario.addEventListener('submit',validarPersona)
    });
    function validarPersona(e)
    {
        e.preventDefault();
        const nuevapersonaobjeto={
            nombrepinput:nombrepinputs.value,
            apellidopinput:apellidopinputs.value,
            Fechanacpinput:Fechanacpinputs.value,
            nombreMinput:nombreMinputs.value,
            apellidosMinput:apellidosMinputs.value,
            FechanacMinput:FechanacMinputs.value,
            nombreNinput:nombreNinputs.value,
            apellidosNinput:apellidosNinputs.value,
            FechaNacNinput:FechaNacNinputs.value,
            HoranacNinput:HoranacNinputs.value,
            LugarNacNinput:LugarNacNinputs.value,
            id:parseInt(ids.value)

            }

            //console.log(nuevapersonaobjeto) //ver si me muetsra un aray con l ainformacion que quiero editar
            if(validar(nuevapersonaobjeto))
            {
                mostraAlerta('todos los campos son obligatorios');

               
                return;
            }     
              //reescribir el objeto
              editarPerosna(nuevapersonaobjeto)
            

    }

    function mostrarPerosna(personaEditable)
    {
        const {nombrepinput,apellidopinput,Fechanacpinput,nombreMinput,apellidosMinput, FechanacMinput,nombreNinput,apellidosNinput,FechaNacNinput,HoranacNinput,LugarNacNinput, id}=personaEditable;
    nombrepinputs.value=nombrepinput;
    apellidopinputs.value=apellidopinput;
    Fechanacpinputs.value=Fechanacpinput;
    nombreMinputs.value=nombreMinput;
    apellidosMinputs.value=apellidosMinput;
    FechanacMinputs.value=FechanacMinput;
    nombreNinputs.value=nombreNinput;
    apellidosNinputs.value=apellidosNinput;
    FechaNacNinputs.value=FechaNacNinput;
    HoranacNinputs.value=HoranacNinput;
    LugarNacNinputs.value=LugarNacNinput;
    ids.value=id;
    }

})();
