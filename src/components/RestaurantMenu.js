import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const[resInfo , setresInfo] = useState(null);

    const {resId} = useParams();


    useEffect(() => {
        fetchMenu();

    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6376724&lng=77.1571443&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
        const json = await data.json();
        setresInfo(json.data)

    }

    if(resInfo === null) return  <Shimmer />

    const {name , cuisines , costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    console.log(itemCards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   
    return( 
        <div className="text-center ">
            <h1>{name}</h1>
            <p>
                
                {cuisines.join(",")} - {costForTwoMessage}
            </p>

            {categories.map((category) => (
                <RestaurantCategory data = {category?.card?.card}/>
            )
        )}

        </div>
    );


};
export default RestaurantMenu;
