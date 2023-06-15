import React, { useState } from 'react';

const Pizza = ({ tiendaPizza }) => {
  const [cantidadRebanadas, setCantidadRebanadas] = useState(8);

  const comerRebanada = () => {
    if (cantidadRebanadas > 0) {
      setCantidadRebanadas(cantidadRebanadas - 1);
    }
  };

  const sumarRebanada = () => {
    if (cantidadRebanadas < 8) {
      setCantidadRebanadas(cantidadRebanadas + 1);
    }
  };

  return (
    <>
      {tiendaPizza.map((pizza, index) => (
        <div className="card" key={index}>
          <div className="box">
            <div className="content">
              <h2>01</h2>
              <img src={pizza.image} alt="Pizza" width={200} height={200}/>
              <h3>{pizza.nombre}</h3>
                <h3>Ingredientes: {pizza.ingredientes}</h3>
                <h3>Precio: {pizza.precio}</h3>
                <h3>Cantidad: {cantidadRebanadas}</h3>
              
                {cantidadRebanadas > 0 && (
                    <a onClick={comerRebanada}>Ordenar</a>
                )}
                {cantidadRebanadas === 0 && (
                <div>
                    <p>¡Se acabaron las rebanadas!</p>
                    <a onClick={sumarRebanada}>Agregar rebanada</a>
                </div>
                )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pizza;
