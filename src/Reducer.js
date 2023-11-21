export const initialState = {
    basket: [],
    basketCount: 0,
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    CLEAR_BASKET: "CLEAR_BASKET"
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}


const Reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
                basketCount: state.basketCount + 1,
            };
        case "REMOVE_ITEM":
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else { console.log("Producto elimindao") }
            return {
                ...state,
                basket: newBasket,
                basketCount: state.basketCount - 1,
                basket: newBasket,
            };
        case "CLEAR_BASKET":
            return {
                ...state,
                basket: [],

            };
        default: return state;
    }
}

export default Reducer