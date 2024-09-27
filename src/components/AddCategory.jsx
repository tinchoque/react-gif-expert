import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  // console.log(setCategories);
  
  const [inputValue, setInputValue] = useState('')

  // cada vez que toco la tecla lo va guardando en inputValue
  const onInputChange = ({target}) =>{
     
    setInputValue(target.value);
  }

  const onSubmit = (event) =>{
    // console.log(event)
    event.preventDefault()
    // para que no deje guaradr algo vacio o menos de un carater
    if(inputValue.trim().length <= 1) return;
    // console.log(inputValue);
    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    // blanque variable, para que se borre el input
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit}> 

      <input type="text" 
            placeholder="Buscar Gif" 
            value = {inputValue}
            onChange={onInputChange}
      />
    </form>
  )
}
