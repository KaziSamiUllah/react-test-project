import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";

const CartItems = () => {

    const [items, setItems] = useState([]);

    useEffect( () => {
        fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(data => setItems(data))

    },[])

    return (
        <div>
            <h1>Cart Items:</h1>
            <Item />
        </div>
    );
};

export default CartItems;