import React from "react";
import {Card, Col, Row} from "react-bootstrap";

function CartItemsFooter({selectedData, total}) {

    function getCountOfSelectedOrders () {
        return selectedData.reduce((acc, curr) => acc + curr.count, 0);
    }

    return <Card>
        <Row>
            <Col md={6}>Showing {selectedData.length} of {total} items</Col>
            <Col md={6}>Total Quantities: {getCountOfSelectedOrders()}</Col>
        </Row>
    </Card>
}

export default CartItemsFooter;