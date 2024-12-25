import './CartProduct.css'
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux"
import { removeFromCart } from "../../redux/Action/cartActions"
import ReusableButton from "../ReusableButton/ReusableButton"
import { getImageForItem } from "../../../utils";
export default function CartProduct({ priceMap, cartItems, totalPrice, showProductImage, showPriceLarge }) {
    const dispatch = useDispatch();
    const products = Object.entries(cartItems); //why tihis and not cartitems from state.cart.items using useselector
  return (
    <div className="cart-product">
        {products.map(([productName, productQuantity]) => {
            return ( 
                <div key={productName} className="cart-product-item">
                {showPriceLarge &&<div className="cart-product-total-large"> {`$${(productQuantity * priceMap[productName]).toFixed(2)}`}</div>}                        
                <div className="cart-product-detail">
                    <div className="cart-product-name"> {productName}</div>
                        <div className="cart-product-description"> 
                            <div className="cart-product-quantity">{`${productQuantity}x`}</div>
                            <div className="cart-product-price">{` @ ${priceMap[productName].toFixed(2)}`}</div>
                            <div className="cart-product-total"> {`$${(productQuantity * priceMap[productName]).toFixed(2)}`}</div>
                    </div>
                </div>
                {showProductImage ?
                <div className="product-img">
                        <img src={getImageForItem} alt={ productName} />
                </div>
                    :
                    <ReusableButton 
                    showLabel = {false}
                    label={`Remove ${productName}`}
                    child={<svg aria-label={`Remove ${productName}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>}  className="remove-product-cart"  onClick={() => dispatch(removeFromCart(productName))}
                    />
                }
                </div>
        
        )
     })}
        <div className="cart-total">
                 <div className="cart-total-label">
                       Order Total
                  </div>
                    <div className="cart-total-value">
                          {`$ ${totalPrice}`}
                   </div>
        </div>
    </div>
  )
}
// Define Prop Types
CartProduct.propTypes = {
    priceMap: PropTypes.object.isRequired, // Object mapping product names to their prices
    cartItems: PropTypes.object.isRequired, // Object with product names as keys and quantities as values
    totalPrice: PropTypes.number.isRequired, // Total price of all items in the cart
    showProductImage: PropTypes.bool, // Whether to show product images
    showPriceLarge: PropTypes.bool, // Whether to show price in a larger font
};

// Default Props
CartProduct.defaultProps = {
    showProductImage: false, // Default to not showing product images
    showPriceLarge: false, // Default to not showing large prices
};
