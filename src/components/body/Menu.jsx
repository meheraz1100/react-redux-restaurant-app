import { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";

const Menu = () => {
    const [dishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);
    const onSelectDish = (dish) => {
        console.log(dish);
        setSelectedDish(dish);
    }
    const menu = dishes.map((dish) => {
        // console.log(dish);
        return <MenuItem dish={dish} onSelectDish={onSelectDish} key={dish.id} />
    });

    const dishDetail = selectedDish ? <DishDetail dish={selectedDish} /> : <h1>Select a dish to View Details</h1> ;

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    {menu}
                </div>
                <div className="col-7">
                    
                    {dishDetail}
                </div>
            </div>
        </div>
    );
};

export default Menu;