import {Col, Card, Button} from "antd"


function FoodBox(props) {

    
    const {name, image, calories, servings} = props.food
    
    
    const deleteSomeFood = () => {

      const foodDeleted = name
      
      props.deleteFood(foodDeleted)
    }
    
    
    
    //console.log(props.food);
    return (
      <Col>
        <Card
          title={name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={image} height={60} alt="food" />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {calories * servings} </b> kcal
          </p>
          <Button type="primary" onClick={deleteSomeFood}> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;