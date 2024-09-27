import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {



    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages= async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }
    // al pasar [], le esta diciendo que es solo la primera vez que se recarga
    useEffect(()=>{
        getImages();
    },[])


  return {
    // images:images,
    images,
    // isLoading : true
    isLoading
  }
}


// un hooks no es mas que una funcion