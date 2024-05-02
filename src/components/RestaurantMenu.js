import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";

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
    console.log(itemCards)
    return( 
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => (
                    <li key="item.card.info.id">
                        {item.card.info.name} - {"Rs."}
                        {item.card.info.price} 
                    </li>
                ))}
               
            </ul>

        </div>
    );
};
export default RestaurantMenu;