import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifItem } from "./GifItem";

export const GifGrid = ( { category } ) => {
    
    const { images, isLoading } = useFetchGifts( category );

    
    
    

    return (
        <>
            <h3> { category } </h3>
          
            {
                isLoading && (  <h2> Cargando...</h2> )
              /*   ? (  <h2> Cargando...</h2> )  // si el loading es true se muestra
                : null  // si el loading es false se sale  */
            }
           
            
            <div className="card-grid">
                { 
                    images.map( (img)  => (
                        <GifItem 
                            key = {img.id}  
                            { ... img }
                        />
                ))}
              
            </div>
            
        </>
    )

}

