import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
    <div className="text-center m-5 p-5">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button className="m-2 p-2 bg-pink-200 rounded-xl" onClick={handleClearCart}>Clear Cart</button>
        <div className="w-6/12 m-auto">
            {cartItems.length === 0 &&  <div>Add items to cart</div>
        }
            <ItemList items = {cartItems} />
        </div>
    </div>
)}
export default Cart;