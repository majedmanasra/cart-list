import React from "react";

function CartItemsFooter({selected, total}) {
    return <div>
        <div>Showing {selected} of {total} items</div>
    </div>
}

export default CartItemsFooter;