import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formulario from './components/Formulario';
import Layout from './components/Layout';
import Historial from './components/Historial';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
  <Route path='/' element={<Layout />}>
  <Route index element={ <Formulario />} />
  <Route path="historial" element= {<Historial />} />
  </Route>
  <Route path='*' element= {<NotFound/>}> </Route>
    </Routes>
   </BrowserRouter>
  </>
  );
};

export default App;

