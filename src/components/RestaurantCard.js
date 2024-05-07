const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {

      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[200px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString} </h4>
      </div>
    );
};


export default RestaurantCard;