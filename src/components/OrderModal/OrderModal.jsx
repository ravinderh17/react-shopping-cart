import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { hideModal } from '../../redux/Action/modalActions';
import { ReactSVG } from 'react-svg';
import "./OrderModal.css"
import ReusableButton from '../ReusableButton/ReusableButton';
import { clearCart } from '../../redux/Action/cartActions';
import CartProduct from '../CartProducts/CartProduct';


const OrderModal = () => {
    const dispatch = useDispatch();
        const { isModalOpen, orderDetails } = useSelector(state => state.modal); 
         console.log('isModalOpen after dispatch:', isModalOpen);

    console.log('isModalOpen:', isModalOpen);

    const handleClose = () => {
        dispatch(hideModal());
    };
    
    const handleStartingNewOrder = () => {
        handleClose();
        dispatch(clearCart());  
    }


    return (
        <Modal isOpen={isModalOpen} onClose={handleClose} orderDetails={orderDetails}>
            {orderDetails && (
                <div className='checkout-modal'>
                    <ReactSVG 
                    className='checkout-icon'
                    src={`/assets/images/icon-order-confirmed.svg`} beforeInjection={(svg) => {
                        svg.setAttribute('role', 'img');
                        svg.setAttribute('aria-label', "icon-order-confirmed");
                    }}
                    />
                    <h2>Order Confirmed</h2>
                    <p>We hope you enjoyed your food!</p>
                    <div className='product-details-modal'>
                        <CartProduct priceMap={orderDetails?.priceMap} cartItems={orderDetails?.cartItems} totalPrice={orderDetails?.totalPrice} showProductImage={true} showPriceLarge={true} />        
                    </div>
                    <ReusableButton className="submit-order" label="Submit Order" onClick={handleStartingNewOrder}/>
                </div>
            )}
        </Modal>
  );
};

export default OrderModal;