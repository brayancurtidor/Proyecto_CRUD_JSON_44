const url=' http://localhost:4000/Personass';
//cuando se crea un nuevo cliente 
export const nuevapersona=async persona=>{
    try {
        console.log(persona)
        await fetch(url,{
            method:'POST',
            body:JSON.stringify(persona),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href='index.html'
    } catch (error) {
        console.log(error)
    }
}
//obtiene todos los clientes
export const obtenenerClientes= async()=>{
    try {
        const resultado=await fetch(url);
        const personas=await resultado.json();
       return personas; 
        
    } catch (error) {
        console.log(error);
    }
}
//eliminar cliente
export const EliminarPersonas=async (id)=>{

    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
        
    } catch (error) {
        console.log(error)
    }
}

//obtener solo un cliente po id
export const obtnerunapersona=async(id)=>
{
    try {
        const resultado=await fetch(`${url}/${id}`);
        const persona=await resultado.json();
        return(persona);
        
    } catch (error) {
        console.log(error)
    }

}
//actualizar un registro
export const editarPerosna=async (personaeditada)=>{
    try {
        await fetch(`${url}/${personaeditada.id}`,
        {
            method:'PUT',
            body:JSON.stringify(personaeditada),
            headers:{
                'Content-Type':'application/json'
            }
        });
        window.location.href='index.html'
        
        //console.log(personaeditada) //mostra el objeto desde la api
        
    } catch (error) {
        console.log(error)
    }
}