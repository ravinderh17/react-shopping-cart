import './Cart.css'
import { useDispatch, useSelector } from "react-redux";
import { ReactSVG } from "react-svg"
import data from '../../../data.json'
import ReusableButton from '../ReusableButton/ReusableButton'
import CartProduct from '../CartProducts/CartProduct'
import { showModal } from '../../redux/Action/modalActions';

export default function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => (state.cart.items))
  
  const priceMap = data.reduce((acc, item) => {
    acc[item.name] = item.price;
    return acc;
  }, {});

  const totalQuantity = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  
  const totalPrice = Object.entries(cartItems).reduce((total, [itemName, quantity]) => {
    const itemPrice = priceMap[itemName] || 0;
    return total + (itemPrice * quantity);
}, 0).toFixed(2);
  
const handleModalView = (priceMap, cartItems, totalPrice) => {
  console.log('Modal is being triggered:', { priceMap, cartItems, totalPrice })
  dispatch(showModal({ priceMap, cartItems, totalPrice })); // Triggers modal with order details
};

  return (
    <div className="cart-main-container">
        <div className="cart-header">
            <h2 style={{color: `hsl(14, 86%, 42%)`}}>{`Your Cart
                (${totalQuantity})`}
            </h2>
        </div>
        {totalQuantity > 0 ?
             <>
                <div className="cart-body">
                      {/* display cartproductdetail component here */} 
                    <CartProduct priceMap={priceMap} cartItems={cartItems} totalPrice={totalPrice} />        
                 </div>    
                    <div className="delivery-slogan">
                      <ReactSVG
                      src={`/assets/images/icon-carbon-neutral.svg`} beforeInjection={(svg) => {
                        svg.setAttribute('role', 'img');
                        svg.setAttribute('aria-label', "icon-carbon-neutral-icon");
                    }}/>
                      <p className="delivery-description">
                      This is a <span>carbon-neutral</span> delivery
                      </p>
                    </div>
                <div className="cart-footer">
                <ReusableButton
                label="Confirm Order" className="confirm-order-button" 
                onClick={()=>
                  handleModalView(priceMap, cartItems, totalPrice)}
                />
                </div>
            </>: 

        <div className="empty-cart-display">
          <ReactSVG 
          src={`/assets/images/illustration-empty-cart.svg`}
          beforeInjection={(svg) => {
            svg.setAttribute('role', 'img');
            svg.setAttribute('aria-label', "illustration-empty-cart");
        }}
          />
            <p className="empty-cart-msg">Your added items would appear here</p>      
        </div>
        }
    </div> 
  )
}
