import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {CART_ITEM_DECREMENT, CART_ITEM_INCREMENT} from "../actions/cartItemCountActions";

function Counter({id, initialCount = 0}) {
    const [count, setCount] = useState(initialCount);
    const dispatch = useDispatch();

    function decrement() {
        dispatch({type: CART_ITEM_DECREMENT, id: id});
    }

    function increment() {
        dispatch({type: CART_ITEM_INCREMENT, id: id});
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    );
}


export default Counter;