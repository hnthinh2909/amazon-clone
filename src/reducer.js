export const initialState = {
    basket: [],
    user: null,
};

// Selector

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

export const getTotalItems = (basket) =>
    basket?.reduce((total, item) => total + item.quantity, 0); 

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            const itemIndex = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
            );

            if(itemIndex >= 0) {
                var basket = [...state.basket];
                for (var i = 0; i < basket.length; i++) {
                    if(basket[i].id === action.item.id) {
                        basket[i].quantity += 1;
                    }
                }
                return {
                    ...state,
                    basket: basket
                }
            } else {
                var item = action.item;
                item.quantity = 1;
                return {
                    ...state,
                    basket: [...state.basket, item],
                }
            }

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }
            
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index >= 0) {
                newBasket.splice(index, 1);
                return {
                    ...state,
                    basket: newBasket
                }
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as from basket`
                )
            }

        // eslint-disable-next-line no-fallthrough
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "DOWN_ONE_PRODUCT":
            const findIndexDown = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasketDown = [...state.basket];

            if(findIndexDown >= 0) {
                // eslint-disable-next-line eqeqeq
                if(newBasketDown[findIndexDown].quantity == 1) {
                    newBasketDown.splice(findIndexDown, 1);
                    return {
                        ...state,
                        basket: newBasketDown
                    }
                } else {
                    newBasketDown[findIndexDown].quantity -= 1
                    return {
                        ...state,
                        basket: newBasketDown
                    }
                }

            } else {
                console.warn(
                    `Your product (id: ${action.id}) as from basket`
                )
            }

        // eslint-disable-next-line no-fallthrough
        case "UP_ONE_PRODUCT":
            const findIndexUp = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasketUp = [...state.basket];

            if(findIndexUp >= 0) {
                newBasketUp[findIndexUp].quantity += 1
                return {
                    ...state,
                    basket: newBasketUp
                }
            } else {
                console.warn(
                    `Can't up product (id: ${action.id}) as from basket more`
                )
            }

        // eslint-disable-next-line no-fallthrough
        default: 
            break;
    }

}

export default reducer;