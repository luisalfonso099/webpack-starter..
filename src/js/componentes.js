
import '../css/componentes.css';



 export const saludar = (nombre) =>{
    console.log('Creando etiqueta h1, en consola');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }, Luis`;
    
    document.body.append(h1);
}
// const nombre = 'Luis';


// saludar(nombre);








