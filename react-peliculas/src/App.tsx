import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Menu from "./Utils/Menu";
import LandingPage from "./LandingPage";
import IndiceGeneros from "./Generos/IndiceGeneros";
import CrearGenero from "./Generos/CrearGenero";
import EditarGenero from "./Generos/EditarGenero";
import IndiceActores from "./Actores/IndiceActores";
import CrearActores from "./Actores/CrearActores";
import EditarActores from "./Actores/EditarActores";
import IndiceCines from "./Cines/IndiceCines";
import CrearCines from "./Cines/CrearCines";
import EditarCines from "./Cines/EditarCines";
import CrearPelicula from "./Peliculas/CrearPelicula";
import EditarPelicula from "./Peliculas/EditarPelicula";
import FiltroPeliculas from "./Peliculas/FiltroPeliculas";
import NotFound from "./Utils/NotFound";

import configurarValidaciones from "./Validaciones";

configurarValidaciones();

function App() {
  return (

      <BrowserRouter>

        <Menu />

        <div className="container">
          <Routes>
           <Route path='/' element={<LandingPage/>}></Route>
          
           <Route path='/generos/CrearGenero' element={<CrearGenero/>}></Route>
           <Route path='/generos/EditarGenero/:id' element={<EditarGenero/>}></Route>
           <Route path='/generos' element={<IndiceGeneros/>}></Route>
           
           <Route path='/actores/CrearActores' element={<CrearActores/>}></Route>
           <Route path='/actores/EditarActores' element={<EditarActores/>}></Route>
           <Route path='/actores' element={<IndiceActores/>}></Route>
        
           <Route path='/cines/CrearCines' element={<CrearCines/>}></Route>
           <Route path='/cines/EditarCines' element={<EditarCines/>}></Route>
           <Route path='/cines' element={<IndiceCines/>}></Route>

           <Route path='/peliculas/CrearPeliculas' element={<CrearPelicula/>}></Route>
           <Route path='/pelicula/EditarPeliculas' element={<EditarPelicula/>}></Route>
           <Route path='/peliculas/Filtro' element={<FiltroPeliculas/>}></Route>

           <Route path="*" element={ <NotFound/>}></Route>

          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
