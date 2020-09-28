/** Wow, encontre como crear estoy que a toda madre, neta necesitaba saber que ra estoy mas que eso como hacerlo, la verdad me di cuenta que mi voluntad es poderosa y que si algo  rdta en mi fuerza de voluntad lo voy a lograr */
/**  */
/** pues ya con eso esta chido */


// Este wey queria que pusieramos la imgen, es decir que hagamos otra peticion de response y que me tajeras una imagen,
// segun yo lo que falta es una madre que se llama data y a esa madre pasarle una url, despues que lance una madre que me cree un elemento en el DOM
// y que sea una img.src = url;
// y que ya aparezca

const getImagen = async() => { //Esta es una peticion async que pide que me respondan una variale y que esa variable ponerla en el DOM y que ahi se quede, osea que apareza una imagen 

    try{
        const apiKey = 'tfRgcwv7vxAyL3vMQapLiD0NQw3148nH'; //Creo apiKey
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json(); //Aqui hizo la desestructuracion de objetos, porque estaba bien cabron todo lo que llevaba

    const {url} = data.images.original; /**Como este wey ya habiamos obtenido la ruta a traves de desesructurar el objeto data */

    const img = document.createElement('img'); 
    img.src = url;
    document.body.append(img);   

    } catch (err){
        // manejo del error
        console.log(err);
    }
}

getImagen();

// ocupaba el url y lo pego abajo de la data = bien


/* option shift a */
/** 
const apiKey = 'tfRgcwv7vxAyL3vMQapLiD0NQw3148nH';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(resp => resp.json())
.then( ({data}) => { 
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn);
 
 */