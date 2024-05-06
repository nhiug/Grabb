const ItemList = ({items}) =>{
    console.log(items)
    return(
        <div>
            {items.map((item) => (
                <div key = {item.card.info.id} className="p-2 m-2 border-black border-b-2 text-left ">
                    <div className="font-bold">
                    <span >{item.card.info.name}                   </span>
                    <span>₹-{item.card.info.price/100}</span>
                    
                    </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
            )

            ) }
        </div>
    )
}

export default ItemList;