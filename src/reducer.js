export const initialState = {
    basket: [],
    totalPrice: [],
};

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
                totalPrice: [...state.totalPrice, action.item.price]
            }

        default: 
            break;
    }

}

export default reducer;