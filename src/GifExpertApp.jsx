import {useState} from "react"
//  import { AddCategory } from './components/AddCategory.jsx'
//  import { GifGrid } from "./components/GifGrid.jsx"
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  
    // const [categories, setCategories] = useState(['One Punch','Dragon bol'])  
    const [categories, setCategories] = useState(['Simpson'])  
    const onAddCategory = (NewCategory) =>{
        //  console.log(NewCategory);
        // controla que no repita, ya que los id deben ser unicos
        if(categories.includes(NewCategory)) return;
         setCategories([...categories,NewCategory]);
        // setCategories(cat => [...cat,'Valorant']);
    }
    // console.log(categories);
    return (
    <>
        <h1>GifExpertApp</h1>
        {/* le paso la funcion, para que peuda caargar el estado categori */}
        <AddCategory onNewCategory={value =>onAddCategory(value)}/>

        {/* listado de gif */}
        {categories.map(category =>(
            <GifGrid key={category} category={category}/>
        ))
        }


    </>
  )
}



