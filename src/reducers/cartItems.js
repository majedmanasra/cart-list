import {
    CART_ITEM_DECREMENT,
    CART_ITEM_INCREMENT,
    CART_ITEM_LOAD_DATA,
    CART_ITEM_SEARCH_TEXT
} from "../actions/cartItemCountActions";

let initialState = {
    data: [],
    searchText: ""
};

export default function cartItemsReducer(state = initialState, action) {

    switch(action.type) {
        case CART_ITEM_LOAD_DATA:
            return { ...action.payload };
        case CART_ITEM_DECREMENT:
            let indexForDecrement = state.data.findIndex(t => t.id === action.id);
            let newArrayDecrement = [...state.data];
            newArrayDecrement[indexForDecrement].count = newArrayDecrement[indexForDecrement].count - 1;

            return {
                ...state,
                data: newArrayDecrement,
            };
        case CART_ITEM_INCREMENT:
            let indexForIncrement = state.data.findIndex(t => t.id === action.id);
            let newArrayIncrement = [...state.data];
            newArrayIncrement[indexForIncrement].count = newArrayIncrement[indexForIncrement].count + 1;

            return {
                ...state,
                data: newArrayIncrement,
            };
        case CART_ITEM_SEARCH_TEXT:
            return Object.assign({}, state, {
            searchText: action.searchText
        });
        default:
            return {...state };
    }
}