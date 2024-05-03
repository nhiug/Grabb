import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const[listofRestaurants , setListofRestaurant] = useState([])
    const[searchText , setsearchText] = useState([])
    const [filteredRestaurant , setFilterRestraunt] = useState([])
    

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6376724&lng=77.1571443&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    } 
     const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
            type="text" className="search-text" value={searchText} onChange={(e) => {
              setsearchText(e.target.value);
            }}></input>
            <button className="searchbtn" onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilterRestraunt(filteredRestaurant);
            }}


            > Search</button>
          </div>
            <button className="filter-btn" onClick={() => {
                const filterlist = listofRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListofRestaurant(filterlist);
            }}>
            Top Rated Restaurant
            </button>

        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <Link 
            key = {restaurant.info.id} 
            to = {"/restaurant/" + restaurant.info.id }
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
};
export default Body;