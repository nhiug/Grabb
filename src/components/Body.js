import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    const[listofRestaurants , setListofRestaurants] = useState(resList)
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filterlist = listofRestaurants.filter(
                    (res) => res.data.avgRating > 4
                );
                setListofRestaurants(filterlist);
            }}>
            Top Rated Restaurant
            </button>

        </div>
        <div className="res-container">
          {listofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};
export default Body