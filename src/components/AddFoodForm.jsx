import { Divider, Input} from "antd"
import {useState} from "react"

function AddFoodForm(props) {

    const [nameInput, setNameInput] = useState("")
    const [caloriesInput, setCaloriesInput] = useState ("")
    const [imageInput, setImageInput] = useState ("")
    const [servingsInput, setServingsInput] = useState (0)

    const addNewFood = (event) =>{
        event.preventDefault()

        const foodToAdd ={
            name:nameInput,
            calories: caloriesInput,
            image: imageInput,
            servings: servingsInput,
        }

        props.addFood(foodToAdd)
    }

    const handleChangeName = (event) => { setNameInput(event.target.value)}

    const handleChangeCalories = (event) => {setCaloriesInput(event.target.value)}

    const handleChangeImage = (event) => {setImageInput(event.target.value)}

    const handleChangeServings = (event) => {setServingsInput(event.target.value)}

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={nameInput} type="text" onChange= {handleChangeName} />

      <label>Calories</label>
      <Input value={caloriesInput} type="number" onChange= {handleChangeCalories} />

      <label>Image</label>
      <Input value={imageInput} type="text" onChange={handleChangeImage}/> 

      <label>Servings</label>
      <Input value={servingsInput} type="number" onChange= {handleChangeServings} />

      <button type="submit" onClick={addNewFood}>Create</button>
    </form>
  )
}

export default AddFoodForm