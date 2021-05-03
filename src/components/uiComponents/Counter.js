import React from "react";
import styles from './cssModules/counter.module.css';
import {Button} from "react-bootstrap";

function Counter({incrementCallback, decrementCallback, count}) {
    return (
        <div>
            <Button disabled={count === 0} className={styles.button} onClick={decrementCallback}>-</Button>
            <label className={styles.label}>{count}</label>
            <Button onClick={incrementCallback}>+</Button>
        </div>
    );
}

export default Counter;