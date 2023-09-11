const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}


const SaveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    SaveCartToLocalStorage(cart);
}


const removeFromLocalStorage = id => {
    const cart = getStoredCart();
    // Removing every same id
    const remaining = cart.filter(idx => idx !== id);
    SaveCartToLocalStorage(remaining);
}


export { addToLocalStorage, getStoredCart, removeFromLocalStorage };