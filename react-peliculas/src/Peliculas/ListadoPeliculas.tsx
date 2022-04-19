import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./Peliculas.model";
import css from './ListadoPeliculas.module.css'
import ListadoGenerico from "../Utils/ListadoGenerico";

export default function ListadoPeliculas (props: ListadoPeliculasProps){
    

    return(

        <ListadoGenerico listado={props.peliculas}>
            <div className={css.div}> 
            {props.peliculas?.map(pelicula => 
            <PeliculaIndividual pelicula={pelicula} 
                                key={pelicula.id}
            />)}
        </div>
        </ListadoGenerico>

    )
            }


interface ListadoPeliculasProps{
    peliculas?: pelicula[]
}