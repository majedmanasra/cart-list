import React from "react";
import Counter from "./Counter";

function CartItem({cartItem}) {

    return (
        <div>
            <div>id: {cartItem.id}</div>
            <div>name: {cartItem.name}</div>
            <div>description: {cartItem.description}</div>
            <div>image: {cartItem.image}</div>
            <div>count: {cartItem.count}</div>

            <Counter id={cartItem.id} initialCount={cartItem.count}/>
            <br/>
        </div>
    );
}

export default CartItem;