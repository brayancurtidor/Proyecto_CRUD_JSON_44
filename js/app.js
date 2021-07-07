import {obtenenerClientes,EliminarPersonas}from './API.js'
(function(){

const tablaDatos=document.querySelector('#listado-clientes');
document.addEventListener('DOMContentLoaded',mostrarPersonas);
tablaDatos.addEventListener('click',confirmareliminar)
async function mostrarPersonas()
{
    const persoans=await obtenenerClientes();
    //console.log(persoans)// ver el arreglo de objetos--inclusi sirve para ver la informacion que hay que extraer en el destructuring
    persoans.forEach(element => {
        const {nombrepinput,apellidopinput,Fechanacpinput,nombreMinput,apellidosMinput, FechanacMinput,nombreNinput,apellidosNinput,FechaNacNinput,HoranacNinput,LugarNacNinput, id}=element;
        const filas=document.createElement('tr');
        filas.innerHTML += `
        <td class="px-5 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class= text-gray-700   "> ${nombrepinput} </p>
        </td>
        <td class="px-5 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${apellidopinput}</p>
        </td>
        <td class="px-5 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
            <p class="text-gray-600">${nombreMinput}</p>
        </td>
        <td class="px-5 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
        <p class="text-gray-600">${apellidosMinput}</p>
        </td>
        <td class="px-5 py-4 whitespace-no-wrap font-medium border-b border-gray-200  leading-5 text-gray-700 font-bold">    
        <p class="text-sm leading-5  text-gray-600 text-lg">${nombreNinput}</p>
        </td>
        <td class="px-5 py-4 whitespace-no-wrap font-medium border-b border-gray-200  leading-5 text-gray-700 font-bold">    
        <p class="text-sm leading-5  text-gray-600 text-lg">${apellidosNinput}</p>
        </td>
        <td class="px-5 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
        <p class="text-gray-600">${FechaNacNinput}</p>
        </td>
        <td class="px-5 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
        <p class="text-gray-600">${HoranacNinput}</p>
        </td>
        <td class="px-5 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
        <p class="text-gray-600">${LugarNacNinput}</p>
        </td>
        <td class="px-5 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-25">
            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>
    `;
    tablaDatos.appendChild(filas);
    });
}

function confirmareliminar(e)
{
    if (e.target.classList.contains('eliminar'))
        {
            //console.log('Le diste eliminar') //verificar si le di al boton correctp
            
            const personaid=parseInt(e.target.dataset.cliente);
            //console.log(personaid) ver si le doy al boton eliminar y que me muestre el id en numero
            const confirmar=confirm('¿Desea eliminar este elemento?')
            if (confirmar)
            {
                EliminarPersonas(personaid);//tiene querecibor un parametro
            }
        }

}

















})();
