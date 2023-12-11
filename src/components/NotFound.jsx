import { Link } from "react-router-dom";
import styles from "../css/NotFound.module.css";
const NotFound = () => {
    return (
      <>
      <section className={styles.notFound}>
      <h1> 404 Not Found</h1>
      <img src="mapache.svg" alt=""  className={styles.mapache}/>
      <h3>Ups... Parece que algo no va bien</h3>
      <p>Por favor verifique su URL</p>
      <p>O haga <Link to="/">Click Aqui</Link> Para volver al inicio</p>
      </section>
      </>
      );
    }; 
    
    
export default NotFound ;