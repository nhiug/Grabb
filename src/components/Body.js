import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";

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

        console.log(json)
        setListofRestaurant(resList)
        setFilterRestraunt(resList)

    } 

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
            res.data.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilterRestraunt(filteredRestaurant);
            }}

            
            > Search</button>
          </div>
            <button className="filter-btn" onClick={() => {
                const filterlist = listofRestaurants.filter(
                    (res) => res.data.avgRating > 4
                );
                setListofRestaurant(filterlist);
            }}>
            Top Rated Restaurant
            </button>

        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};
export default Body;