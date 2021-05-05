import {Button, Col, Row} from "react-bootstrap";
import SearchBar from "../uiComponents/SearchBar";
import React, {useCallback} from "react";
import {CART_ITEM_SEARCH_TEXT} from "../../actions/cartItemCountActions";
import {useDispatch} from "react-redux";

function CartItemHeader ({cartItems, addRandomData}) {

    const dispatch = useDispatch();

    const handleSearchChange = useCallback((e) => {
        dispatch({type: CART_ITEM_SEARCH_TEXT, searchText: e.target.value});
    }, [dispatch]);


    return <Row>
        <Col xs={12} md={10}><SearchBar searchText={cartItems.searchText} handleChange={handleSearchChange}/></Col>
        <Col xs={12} md={2}><Button onClick={() => addRandomData(dispatch, cartItems.data)}>Add Random Item</Button></Col>
    </Row>;
}

export default CartItemHeader;