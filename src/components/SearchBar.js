import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CART_ITEM_SEARCH_TEXT} from "../actions/cartItemCountActions";

function SearchBar() {

    const searchText = useSelector(state => state.cartItems.searchText);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let value = e.target.value;
        dispatch({type: CART_ITEM_SEARCH_TEXT, searchText: value});
    };

    return <div>
        <input value={searchText} onChange={handleChange}/>
    </div>;
}

export default SearchBar;