import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, DECREMENT_ITEM } from '../Action/cartActions';

const initialState = {
    items: {},
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const currentQuantity = state.items[action.payload] || 0
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: currentQuantity + 1
                }
            }
        }
        case DECREMENT_ITEM: {
            const itemName = action.payload;
            const currentQuantity = state.items[itemName] || 0
            if (currentQuantity > 0) {
                const newQuantity = currentQuantity - 1;

                const updatedItems = { ...state.items };

                if (newQuantity > 0) {
                    updatedItems[itemName] = newQuantity;
                } else {
                    delete updatedItems[itemName];
                }

                return {
                    ...state,
                    items: updatedItems,
                };
            }

            return state;
        }
        case REMOVE_FROM_CART: {
            const { [action.payload]: _, ...restItems } = state.items;
            return {
                ...state,
                items: restItems,
            };
        }


        case CLEAR_CART:
            return {
                ...state,
                items: {},
            };

        default:
            return state;
    }
}
export default cartReducer;