import React from "react";
import styles from './cssModules/counter.module.css';
import {Button} from "react-bootstrap";

function Counter({incrementCallback, decrementCallback, count}) {

    const isDecrementDisabled = count === 0;

    return (
        <div>
            <Button disabled={isDecrementDisabled} onClick={decrementCallback}>-</Button>
            <label className={styles.label}>{count}</label>
            <Button onClick={incrementCallback}>+</Button>
        </div>
    );
}

export default Counter;