

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async (name) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await resp.json();
        const { front_default } = data.sprites;
        return front_default;
    } catch (error) {
        //console.error(error);
        return undefined;
    }
};



