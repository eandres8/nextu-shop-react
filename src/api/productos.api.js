import { SERVER, SERVER_API } from '../constants';

export const requestProducts = () => {
    let urlS = `${SERVER_API}/productos`;
    return fetch(urlS)
        .then(data => data.json())
        .then(products => {
            return products.map(p => {
                return { ...p, img: `${SERVER}/img/${p.img}` };
            });
        });
}

export const payCarrito = ( carrito ) => {
    let _body = {
        compra: carrito
    }
    let fetchOpt = {
        url: `${SERVER_API}/productos`,
        method: 'post',
        body: JSON.stringify(_body)
    };

    console.log(fetchOpt);

    return fetch(fetchOpt)
        .then(data => data.json())
        .then(data => data)
        .catch(console.log);
}