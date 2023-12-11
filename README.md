# 🚗 Formulario de Cotización para Lavadero de Vehículos

<p align="center">
  <img src="https://imgur.com/a/nQYYF6y" alt="Logo de la aplicación" width="200" height="200">
</p>

## 📝 Descripción
El componente `Formulario` se encarga de gestionar la interfaz de usuario para que los usuarios ingresen la información necesaria para cotizar el lavado de un vehículo. La aplicación utiliza datos de vehículos y servicios almacenados en un archivo JSON (`data.json`). Los resultados de la cotización se pueden guardar en un historial.

## 📁 Estructura del Archivo
- **Imports:**
  - `React`, `useEffect`, `useState`: Importación de React y sus hooks para el manejo de estados y efectos.
  - `Form` de `react-router-dom`: Aunque importa `Form`, parece no utilizarse en el código actual.
  - `Swal` de 'sweetalert2': Librería para mostrar alertas interactivas.
  - `styles` de `"../css/Formulario.module.css"`: Importación de estilos para el componente.

- **Componente Funcional:**
  - **Estados:**
    - `historial`: Almacena el historial de cotizaciones (inicializado a partir de `localStorage`).
    - `load`: Indica si se está realizando una carga de datos.
    - `listOne`, `listTwo`: Almacenan listas de vehículos y servicios respectivamente.
    - `optionOne`, `optionTwo`: Almacenan las opciones seleccionadas por el usuario.
    - `total`: Almacena el resultado de la cotización.

  - **Efectos:**
    - Utiliza `useEffect` para cargar datos desde `data.json` al montar el componente y para actualizar el historial en `localStorage`.

  - **Funciones:**
    - `cotizar`: Realiza la cotización cuando el formulario es enviado.
    - `guardar`: Guarda la cotización en el historial y muestra una notificación de éxito.

  - **Renderizado:**
    - Muestra un formulario con selectores para vehículo y servicio.
    - Muestra un gif de carga mientras se cargan los datos.
    - Muestra el resultado de la cotización y un botón para guardar.

## ▶️ Uso
1. El usuario selecciona un vehículo y un servicio.
2. Al hacer clic en "Cotizar", se calcula el total del lavado.
3. Se muestra el total y el usuario puede hacer clic en "Guardar" para almacenar la cotización en el historial.
