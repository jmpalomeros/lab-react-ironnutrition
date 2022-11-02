// import logo from './logo.svg';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
//import {Col, Card, Button} from "antd"
import './App.css';



function App() {

  const [listado, setListado] = useState(foods)

  const [listadoDuplicado, setListadoDuplicado] = useState (foods)

  const addNewFood = (foodToAdd) => {

    const copy = [...listado]
    copy.push(foodToAdd)
    setListado(copy)

    const copyDuplicado = [...listado]
    copyDuplicado.unshift(foodToAdd)
    setListadoDuplicado(copyDuplicado)

  }

  const listadoFiltrado = (filterQuery) =>{
    const listadoFiltradoArr = listado.filter((eachElem)=>{
      return eachElem.name.includes(filterQuery)
    })

    setListadoDuplicado(listadoFiltradoArr)
  }

  const deleteSomeFood = (foodDeleted) => {
    console.log(foodDeleted)
    const filteredListado = listado.filter((eachFood)=>{
      return eachFood.name === foodDeleted ? false : true
        
      })

      setListadoDuplicado(filteredListado)
      setListado(filteredListado)

    }
    
  
  
  return (
    <div className="App">

     <h3>Food List</h3>

    <hr />

     <AddFoodForm 
      addFood = {addNewFood}
      setListado = {setListado}
     />
     
    <hr />

      <Search listadoFiltrado = {listadoFiltrado}/>
    
    <hr />

      {listadoDuplicado.map((food)=>{

        const {name, calories, image, servings} = food

        return(  
       

          <FoodBox 
          food = { {

          name: name,
          calories: calories,
          image: image,
          servings: servings
        }}
          deleteFood = {deleteSomeFood}
        />
                    
        )})
      }


      

    </div>
  );
}

export default App;
