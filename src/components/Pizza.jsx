import React, { useState } from 'react';

const Pizza = ({ tiendaPizza }) => {
  const [cantidadRebanadas, setCantidadRebanadas] = useState(new Array(tiendaPizza.length).fill(8));

  const comerRebanada = (index) => {
    if (cantidadRebanadas[index] > 0) {
      const newCantidadRebanadas = [...cantidadRebanadas];
      newCantidadRebanadas[index] -= 1;
      setCantidadRebanadas(newCantidadRebanadas);
    }
  };

  const sumarRebanada = (index) => {
    if (cantidadRebanadas[index] < 8) {
      const newCantidadRebanadas = [...cantidadRebanadas];
      newCantidadRebanadas[index] += 1;
      setCantidadRebanadas(newCantidadRebanadas);
    }
  };

  return (
    <>
      {tiendaPizza.map((pizza, index) => (
        <div className="card" key={index}>
          <div className="box">
            <div className="content">
              <h2>01</h2>
              <img src={pizza.image} alt="Pizza" width={200} height={200} />
              <h3>{pizza.nombre}</h3>
              <h3>Ingredientes: {pizza.ingredientes}</h3>
              <h3>Precio: {pizza.precio}</h3>
              <h3>Cantidad: {cantidadRebanadas[index]}</h3>

              {cantidadRebanadas[index] > 0 && (
                <a onClick={() => comerRebanada(index)}>Ordenar</a>
              )}
              {cantidadRebanadas[index] === 0 && (
                <div>
                  <p>¡Se acabaron las rebanadas!</p>
                  <a onClick={() => sumarRebanada(index)}>Agregar rebanada</a>
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
