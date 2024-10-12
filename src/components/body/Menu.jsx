import { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";

const Menu = () => {
    const [dishes, setDishes] = useState(DISHES);
    console.log(dishes);
    const menu = dishes.map((dish) => {
        console.log(dish);
        return <MenuItem dish={dish} key={dish.id} />
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    {menu}
                </div>
            </div>
        </div>
    );
};

export default Menu;