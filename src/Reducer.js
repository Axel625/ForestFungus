export const initialState = {
    basket: [{}]
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET"
}

const Reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
       default: return state;
    }
}

export default Reducer