import './Counter.css'
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, decrementItem } from "../../redux/Action/cartActions";
import ReusableButton from "../ReusableButton/ReusableButton";

const Counter = ({ productName }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleProductIncrement = () => {
        dispatch(addtoCart(productName))
    }
    const handleProductDecrement = () => {
        dispatch(decrementItem(productName))
    }

    return (
       <div className="counter-main-component">
            <ReusableButton
            className="icon1" 
             label={`Remove 1 ${productName} from cart`}
             showLabel= {false}
             child={<svg aria-label="decrement-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z"/></svg>} className="decrement-quantity-button" onClick={handleProductDecrement}/>
            
            <span className="product-added-quantity">{cartItems?.[productName]}</span>
            <ReusableButton 
            className="icon2"
                label={`Add 1 more "${productName}" in cart`}
                showLabel= {false}
              child={<svg aria-label="increment-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>} className="increment-quantity-button" onClick={handleProductIncrement}/>
        </div>
    )
}
export default Counter