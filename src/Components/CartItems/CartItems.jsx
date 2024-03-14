import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";


const CartItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    return (
        <div className="w-full">
            <h1>Cart Items:{items ? items.length : 0}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    items.map((item, idx) => (
                        <Item key={idx} cartItem={item} />))
                }

            </div>
        </div>

    );
};

export default CartItems;