import React from 'react';
import ReactDOM from 'react-dom';
import GiftExpertApp from './GiftExpertApp';

import './index.css';

ReactDOM.render(<GiftExpertApp />, document.querySelector('#root'))
// const apiKey = 'X2YE8ypI2aLjVVKx2nQPblnmfV4cwkUn';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     //Esta promesa se ve muy compleja de enetender funciona pero no puede estar mejor 
//     //resp.json().then(data => {
//     //     console.log(data);
//     // })
//     //Esto es una promesa en cadena;
//     .then( resp => resp.json())
//     .then( ({ data }) => {
//         //console.log(data.images.original.url);
//         const { url } = data.images.original;
        
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn);
