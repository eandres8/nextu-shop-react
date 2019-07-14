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
        productos: carrito
    };

    console.log(_body);

    let fetchOpt = {
        method: 'post',
        body: JSON.stringify(_body),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${SERVER_API}/productos`, fetchOpt)
        .then(data => data.json())
        .then(data => data)
        .catch(console.log);
}