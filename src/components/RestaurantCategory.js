import ItemList from "./ItemList";

import { useState } from "react";
const RestaurantCategory = ({data}) => {

    const[showItems, setshowItems] = useState(null);

    const handleClick = ( ) => {
        setshowItems(!showItems);
    }

    return(
        <div>
            <div className="w-6/12  m-auto  bg-gray-50 my-4 shadow-lg p-4 ">
                <div onClick = {handleClick} className="flex justify-between">
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span className="bg-pink-100">🔽</span>
                    
                </div>
                {showItems && <ItemList items= {data.itemCards} />}
            </div>
        </div>


      
    )
}
export default RestaurantCategory;