import CartItemsList from "./CartItemsList";
import CartItemsFooter from "./CartItemsFooter";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CART_ITEM_ADD_ITEM} from "../../actions/cartItemCountActions";
import {Container} from "react-bootstrap";
import CartItemHeader from "./CartItemsHeader";
import {getCartItem} from "../../api/cartItem";

const addRandomData = (dispatch) => {
    getCartItem().then(t => {
        dispatch({type: CART_ITEM_ADD_ITEM, item: {
                name: t.data.caption,
                description: t.data.category,
                img: t.data.image
            }});
    });
};

const getInitialData = (dispatch, initialDataCount) => {
    for(let i = 0; i < initialDataCount; i++) {
        addRandomData(dispatch)
    }
};

function Cart() {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        getInitialData(dispatch, 5);
    }, []);

    const normalizedSearchText = cartItems.searchText.toLowerCase();

    // TODO: Should keep the same reference
    const filteredData = cartItems.data.allItemIds.map(t => {

        if(cartItems.data[t].name.toLowerCase().includes(normalizedSearchText) || cartItems.data[t].description.toLowerCase().includes(normalizedSearchText))
            return cartItems.data[t];

    }).filter(t => t);

    return <Container>
        <CartItemHeader cartItems={cartItems} addRandomData={addRandomData}/>
        <CartItemsList cartItems={filteredData}/>
        <CartItemsFooter selectedData={filteredData} total={cartItems.data.allItemIds.length}/>
    </Container>
}

export default Cart;