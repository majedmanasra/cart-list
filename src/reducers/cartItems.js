import {
    CART_ITEM_DECREMENT,
    CART_ITEM_INCREMENT,
    CART_ITEM_ADD_ITEM,
    CART_ITEM_SEARCH_TEXT
} from "../actions/cartItemCountActions";
import produce from 'immer'

let initialState = {
    data: {
        allItemIds: []
    },
    searchText: ""
};

export default function cartItemsReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case CART_ITEM_ADD_ITEM:
                let newId = draft.data.allItemIds.length;
                draft.data[newId] = {
                    id: newId,
                    ...action.item,
                    count: 0
                };
                draft.data.allItemIds.unshift(newId);
                break;
                
            case CART_ITEM_DECREMENT:
                draft.data[action.id].count--;
                break;

            case CART_ITEM_INCREMENT:
                draft.data[action.id].count++;
                break;

            case CART_ITEM_SEARCH_TEXT:
                draft.searchText = action.searchText;
                break;

            default:
                return draft;
        }
    });
}