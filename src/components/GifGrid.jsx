import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./gifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { useState } from 'react';


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)

    // console.log({images, isLoading})
    // const [images, setImages] = useState([]);

    // const getImages= async()=>{
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
    // // al pasar [], kle esta diciendo que es solo la primera vez que se recarga
    // useEffect(()=>{
    //     getImages();
    // },[])
    

  return (
    <>
        <h1>{category}</h1>
        
        {
            // isLoading ? (<h2>Cargando....</h2>) : null
            isLoading && (<h2>Cargando....</h2>)  // es un and, evalua solo una vez
        }


        <div className="card-grid"> 
        {
            images.map((image) => (
                < GifItem key={image.id} 
                        // title={image.title} 
                        // url={image.url}
                        {...image}         // desastructura image
                        
                        />
            ))
        }

        </div>

    


    </>
  )
}
