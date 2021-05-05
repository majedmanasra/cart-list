import {
    CART_ITEM_DECREMENT,
    CART_ITEM_INCREMENT,
    CART_ITEM_ADD_ITEM,
    CART_ITEM_SEARCH_TEXT
} from "../actions/cartItemCountActions";
import produce from 'immer'

let initialState = {
    data: [],
    searchText: ""
};

export default function cartItemsReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case CART_ITEM_ADD_ITEM:
                action.item.id = draft.data.length;
                action.item.count = 0;
                draft.data.unshift(action.item);
                break;
                
            case CART_ITEM_DECREMENT:
                let itemForDecrement = draft.data.find(t => t.id === action.id);
                itemForDecrement.count--;
                break;

            case CART_ITEM_INCREMENT:
                let itemForIncrement = draft.data.find(t => t.id === action.id);
                itemForIncrement.count++;
                break;
            case CART_ITEM_SEARCH_TEXT:
                draft.searchText = action.searchText;
                break;

            default:
                return draft;
        }
    });
}