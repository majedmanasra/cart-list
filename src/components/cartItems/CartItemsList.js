import React from "react";
import CartItem from "./CartItem";

function CartItemsList({cartItems}) {

    return (
        cartItems.map(t => <CartItem key={t.id} cartItem={t}/>)
    )
}

export default CartItemsList;