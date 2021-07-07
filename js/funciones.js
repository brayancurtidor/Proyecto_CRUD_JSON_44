export function mostraAlerta(mensaje)
{
    const alerta=document.querySelector('.bg-red-100')
    if(!alerta)
    {
        const alerta=document.createElement('p')
        alerta.classList.add('alerta','bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center')
        alerta.innerHTML=`
                <strong class="font-bold">error</strong>
                <span class="block sm:inline">${mensaje}</span>
        `;
        const formulariohtml=document.querySelector('#formulario')
        formulariohtml.appendChild(alerta)
        setTimeout(() => {
            alerta.remove();
        },3000);
    }
}
export function validar(objeto)
{
    //retornaremos true o false si pasa o no la validacion el objeto
    return !Object.values(objeto).every(inputs=>inputs!=='') //me muestra false si algunos de los campos esta vacio

}
