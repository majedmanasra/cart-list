import React from "react";
import Counter from "../uiComponents/Counter";
import {CART_ITEM_DECREMENT, CART_ITEM_INCREMENT} from "../../actions/cartItemCountActions";
import {useDispatch} from "react-redux";
import {Card, Col, Image, Row} from "react-bootstrap";

function CartItem({cartItem}) {
    const dispatch = useDispatch();

    function decrement() {
        dispatch({type: CART_ITEM_DECREMENT, id: cartItem.id});
    }

    function increment() {
        dispatch({type: CART_ITEM_INCREMENT, id: cartItem.id});
    }

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={12} md={2}>
                        <Image thumbnail={true} src={cartItem.img} />
                    </Col>
                    <Col xs={12} md={7}>
                        <Card.Title>{cartItem.name}</Card.Title>
                        <Card.Text>{cartItem.description}</Card.Text>
                    </Col>
                    <Col xs={12} md={3}>
                        <Counter incrementCallback={increment} decrementCallback={decrement} count={cartItem.count}/>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
}

export default CartItem;