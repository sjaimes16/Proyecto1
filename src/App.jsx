import React, { useState } from 'react';
import Pizza from './components/Pizza';
import './app.css';

// // Componente Pizza
// const Pizza = ({ nombre, ingredientes, precio }) => {
//   const [cantidadRebanadas, setCantidadRebanadas] = useState(8);

//   const comerRebanada = () => {
//     if (cantidadRebanadas > 0) {
//       setCantidadRebanadas(cantidadRebanadas - 1);
//     }
//   };

//   return (
//     <div>
//       <h2>{nombre}</h2>
//       <p>Ingredientes: {ingredientes}</p>
//       <p>Precio: ${precio}</p>
//       <p>Cantidad de rebanadas restantes: {cantidadRebanadas}</p>
//       <button onClick={comerRebanada}>Comer una rebanada</button>
//     </div>
//   );
// };



const App = () => {
  const [tiendaPizza, setTiendaPizza] = useState([
    {nombre: 'Pizza de queso', ingredientes: 'Queso, salsa de tomate', precio: 12, image: 'https://th.bing.com/th/id/OIP.YPONnt8MNAE1h7VdhdwK6AHaEK?pid=ImgDet&rs=1'},
    {nombre: 'Pizza de pepperoni', ingredientes: 'Queso, salsa de tomate', precio: 12, image: 'https://th.bing.com/th/id/R.37d37d9f1001e88384dafc6e5cc60c4f?rik=TzyEFyENeTa0CQ&pid=ImgRaw&r=0'},
    {nombre: 'Pizza de carne', ingredientes: 'Queso, salsa de tomate', precio: 12, image: 'https://th.bing.com/th/id/R.2846e154312bc86a636e3732553ffebf?rik=9aDbI6qP6%2b6Nyg&riu=http%3a%2f%2fwww.comemelapizza.com%2fwp-content%2fuploads%2f2015%2f05%2fPizza-de-carne-picada.jpg&ehk=MV3nT6FZ1ifVOsFUt%2bWzuHsxCOBkie%2fSUXuLKgklthc%3d&risl=&pid=ImgRaw&r=0'},
    {nombre: 'Pizza de pollo', ingredientes: 'Queso, salsa de tomate', precio: 12, image: 'https://th.bing.com/th/id/R.3f1ce142180f82fc54cf582906531524?rik=UtgOuT4PU2HQZQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-BT-yUoWRhDc%2fTxcSUUpdkEI%2fAAAAAAAAOOk%2fIPerUEhzSEk%2fs1600%2fIMG_6795.JPG&ehk=wIUp9g%2fMDhGJRb5BoFl%2b0Ijluf1umaYSefcN59ZbOmE%3d&risl=&pid=ImgRaw&r=0'},
    {nombre: 'Pizza de Hawaiana', ingredientes: 'Queso, salsa de tomate', precio: 12, image: 'https://th.bing.com/th/id/OIP.OjHg1spkqD4882y-hZDdowHaFj?pid=ImgDet&rs=1'},
  ]);

  return (
    <div>
      <h1>¡Bienvenido a nuestra pizzería!</h1>
      <div className='container'>
        <Pizza tiendaPizza={tiendaPizza}/>
      </div>
    </div>
  );
};

export default App;
