import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setLoading(false); //dispara solo un render 

    }

    useEffect( () => {
        getImages();

    }, []);


    return {
        images: images,
        isLoading: loading
    }
}
