import { SERVER } from '../constants';

export const requestProducts = () => {
    let urlS = `${SERVER}/productos`;
    return fetch(urlS)
        .then(data => data.json())
        .then(products => {
            return products.map(p => {
                return { ...p, img: `${SERVER}/img/${p.img}` };
            });
        });
}