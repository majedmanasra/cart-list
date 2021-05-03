import CartItemsList from "./CartItemsList";
import CartItemsFooter from "./CartItemsFooter";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CART_ITEM_LOAD_DATA} from "../../actions/cartItemCountActions";
import {Container} from "react-bootstrap";
import axios from "axios";
import CartItemHeader from "./CartItemsHeader";

const addRandomData = (dispatch, result) => {
    axios.get('https://some-random-api.ml/meme').then(t => {
        result.unshift({
            id: result.length,
            name: t.data.caption,
            description: t.data.category,
            img: t.data.image,
            count: 0
        });

        dispatch({type: CART_ITEM_LOAD_DATA, payload: {data: result, searchText: ""}});
    });
};

const getInitialData = (dispatch) => {
    const initialData = [];
    for(let i = 0; i < 5; i++) {
        addRandomData(dispatch, initialData)
    }
};

function Cart() {

    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        getInitialData(dispatch);
    }, []);

    const normalizedSearchText = cartItems.searchText.toLowerCase();
    const filteredData = cartItems.data.filter(t => t.name.toLowerCase().indexOf(normalizedSearchText) > -1 || t.description.toLowerCase().indexOf(normalizedSearchText) > -1 || !normalizedSearchText);

    return <Container>
        <CartItemHeader cartItems={cartItems} addRandomData={addRandomData}/>
        <CartItemsList cartItems={filteredData}/>
        <CartItemsFooter selectedData={filteredData} total={cartItems.data.length}/>
    </Container>
}

export default Cart;