import { Link, Outlet } from "react-router-dom";
import styles from "../css/Layout.module.css"


const Layout = () => {
    return (
    <>
        <header>
        <Link to="/" title="Logo">
        <img src="logo1.svg" alt="Logotipo"  className={styles.logo}/>
            </Link>
        <h1>Cotizador Lavadero</h1>
        <nav>
        <Link to="/" title="Ver Formulario" className={styles.link}>
        Formulario
            </Link>
        <Link to="/historial" title="Ver Historial" className={styles.link}>
        Historial
            </Link>
            </nav>
        </header>
        <Outlet />

    <footer className={styles.footer}>
    <p>&copy; <a href="https://www.linkedin.com/in/augusto-natiello-119b8a214/" target="_blank" rel="noopener noreferrer">Augusto Natiello</a> 2023</p>
    </footer>
    </>
    );
};

export default Layout;