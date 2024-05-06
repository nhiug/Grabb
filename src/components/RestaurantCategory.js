import ItemList from "./ItemList";
const RestaurantCategory = ({data}) => {
    return(
        <div>
            <div className="w-6/12  m-auto  bg-gray-50 my-4 shadow-lg p-4 ">
                <div className="flex justify-between">
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>````</span>
                    
                </div>
                <ItemList items= {data.itemCards} />
            </div>
        </div>


      
    )
}
export default RestaurantCategory;