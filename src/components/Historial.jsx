import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import styles from "../css/Historial.module.css";
const Historial = () => {
  const [historial, setHistorial] = useState(() => {
    let storage = localStorage.getItem("historial");
    if (storage) return JSON.parse(storage);
    localStorage.setItem("historial", JSON.stringify([]));
    return [];
  });


  const borrarHistorial = () => {
    return Swal.fire({
      title: "Estas seguro de borrar el historial?",
      showDenyButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
      icon: "question"
    }).then((result) => {
      if (result.isConfirmed) {
        setHistorial([]);
      }
    });
};

  useEffect(() => {
    localStorage.setItem("historial", JSON.stringify(historial)), [historial];
  });
  return (
    <>
    <header>
      <h1>Historial</h1>
      <button type="button" onClick={borrarHistorial} className={styles.borrar}>Borrar Historial</button>

    </header>
      <ul>
        {historial.length === 0 ? (
          <li className={styles.liHistorial}>
            <p>El historial esta vacio.</p>
          </li>
        ) : (
          historial.map((elemento, index) => (
            <li key={index} className={styles.liHistorial}>
              <p>Fecha: {elemento.fecha}</p>
              <p>Hora: {elemento.time}</p>
              <img src={elemento.vehiculo.img} alt="" className={styles.imgHistorial} />
              <p>Vehiculo: {elemento.vehiculo.content}</p>
              <p>Servicio: {elemento.servicio.content}</p>
              <p>Total: ${elemento.total}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Historial;
