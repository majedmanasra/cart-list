import './App.css';
import React, {useEffect} from "react";
import CartItemsList from "./components/CartItemsList";
import SearchBar from "./components/SearchBar";
import CartItemsFooter from "./components/CartItemsFooter";
import {useDispatch, useSelector} from "react-redux";
import {CART_ITEM_LOAD_DATA} from "./actions/cartItemCountActions";

const iniitalData = [
    {id: 1, count: 0, description: "Interviewee", img: "", name: "Majed Manasra"},
    {id: 2, count: 0, description: "Sponsor", img: "", name: "Moaead Yahya"},
    {id: 3, count: 0, description: "Eating shit", img: "", name: "Sami Ghawi"},
];

function App() {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: CART_ITEM_LOAD_DATA, payload: {data: iniitalData, searchText: ""}});
    }, [])

    const filteredData = cartItems.data.filter(t => t.name.indexOf(cartItems.searchText) > -1 || t.description.indexOf(cartItems.searchText) > -1 || !cartItems.searchText);

    return (
        <div className="App">
            <header className="App-header">
                <SearchBar/>
                <CartItemsList cartItems={filteredData}/>
                <CartItemsFooter selected={filteredData.length} total={cartItems.data.length}/>
            </header>
        </div>
    );
}

export default App;