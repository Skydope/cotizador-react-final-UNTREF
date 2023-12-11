import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import Swal from 'sweetalert2'
import styles from "../css/Formulario.module.css";

const Formulario = () => {
  const [historial, setHistorial] = useState(() => {
    let storage = localStorage.getItem("historial");
    if (storage) return JSON.parse(storage);
    localStorage.setItem("historial", JSON.stringify([]));
    return [];
  });

  const [load, setLoad] = useState(false);
  const [listOne, setListOne] = useState([]);
  const [listTwo, setListTwo] = useState([]);
  const [optionOne, setOptionOne] = useState(null);
  const [optionTwo, setOptionTwo] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    setLoad(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((datos) => {
        setListOne(datos.filter(({ type }) => type == "client"));
        setListTwo(datos.filter(({ type }) => type == "servicio"));
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoad(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("historial", JSON.stringify(historial)), [historial];
  });

  const cotizar = (e) => {
    e.preventDefault();
    if(optionOne == null || optionTwo == null){
      return Swal.fire({
        title: 'Ups.. Algo no anda bien',
        text: 'Por favor complete todos los datos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
    setLoad(true);
    setTimeout(() => {
      setTotal(1500 * optionOne * optionTwo);
      setLoad(false);
      e.target.reset();
      },1500);
  };

  const guardar = () => {
    setHistorial([...historial,{fecha: new Date().toLocaleDateString("es-mx"), 
    time: new Date().toLocaleTimeString("es-mx"),
    vehiculo: listOne.find(({ id }) => id == optionOne),
    servicio: listTwo.find(({ id }) => id == optionTwo),
    total: total.toFixed(2),
    
  }, 
]);
setTotal(null);
return  Swal.fire({
  icon: 'success',
  iconColor: '#282828',
  title: 'Éxito',
  text: 'Historial actualizado',
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
});
  };

  return (
    <>
      <h1>Formulario</h1>
      {load && (
        <>
          <img src="./loading.gif" alt="loading gif" className={styles.load}/>
        </>
      )}
      {!load && (
        <form onSubmit={cotizar}>
          <fieldset>
            <label htmlFor="vehiculo">Vehiculo</label>
            <select name="vehiculo" id="vehiculo" defaultValue={0} onChange={({target}) => setOptionOne(target.value)}>
              <option value={0} disabled>
                Seleccionar Vehiculo
              </option>
              {listOne.map(({ id, content }) => (
                <option key={id} value={id}>
                  {content}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="servicio">Servicio</label>
            <select name="servicio" id="servicio" defaultValue={0} onChange={({target}) => setOptionTwo(target.value)}>
              <option value={0} disabled>
                Seleccionar Servicio
              </option>
              {listTwo.map(({ id, content }) => (
                <option key={id} value={id}>
                  {content}
                </option>
              ))}
            </select>
          </fieldset>
          <button type="submit" className={styles.cotizar}>Cotizar</button>
        </form>
      )}
      {total && <form onSubmit={(e) => e.preventDefault()}>
        <h2>Total de Lavado: ${total.toFixed(2)}</h2>
        <button type="button" onClick={guardar} className={styles.guardar}>Guardar</button>
        </form>}
    </>
  );
};

export default Formulario;
