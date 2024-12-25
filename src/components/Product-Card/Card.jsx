import PropTypes from 'prop-types'; 
import './Card.css'
import { addtoCart } from '../../redux/Action/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import AddtoCartButton from '../ReusableButton/ReusableButton';
import Counter from '../Counter/Counter'
export default function Card({product}) {

    // use redux state here, for tracking list of items present in cart currently
    // if no item , for button- display just add to cart button
    // keep track of items in cart using cartitems
    //  display counter component instead of button -- only if item/product from list of products already present under cart-items section---- (cart-items have name of that product --- (we can use cartitems[name]))
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => (state.cart.items))
    const {image, name, category, price} = product
    const uniqueId = `clip-${Math.random().toString(36).substring(2, 9)}`;
    const handleAddToCart = () => {
      dispatch(addtoCart(name))
  }
  return (
    <div className="card">
        <div className="productCard-head">
          <picture>
                <source media="(min-width: 1024px)" srcSet={image.desktop} />
                <source media="(min-width: 768px)" srcSet={image.tablet} />
                <source media="(min-width: 375px)" srcSet={image.mobile} />
                <img src={image.thumbnail} alt={name} className="product-image" />
          </picture>
                     {cartItems[name] ?
                    <Counter productName={name}/> :
                    <div className="AddtoCard-btn-container">
          <AddtoCartButton className="card-button"
              label="Add to Cart"
              showLabel = {true}
              child={<svg aria-label="add-to-cart-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" ><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs>
                <clipPath id={uniqueId}><path fill="currentColor" d="M.333 0h20v20h-20z"/></clipPath>
                </defs></svg>}
              onClick={handleAddToCart}>
                Add to Cart
          </AddtoCartButton> 
          </div>
          } 
          </div>

        <div className="productCard-body">
              <p className="card-category">{category}</p>       
              <h4 className="card-title">{name}</h4>
              <div className="price">
                <p className="card-price">{`$ ${price}`}</p>
              </div>   
        </div>
    </div>
  )
}

// PropTypes validation
Card.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

