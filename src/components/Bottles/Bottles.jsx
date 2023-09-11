import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../utilities/localStorage";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);



    useEffect(() => {
        console.log('Called the useEffect', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart);
        }
    }, [bottles]);


    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id);
    }


    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div >
    );
};

export default Bottles;