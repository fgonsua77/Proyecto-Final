const carritoCompra = "cart"

function getData() {
    return JSON.parse(localStorage.getItem(carritoCompra))
}

function setData() {
    localStorage.setItem(carritoCompra, JSON.stringify([]))
}

function updateCart(product) {
    const cart = JSON.parse(localStorage.getItem(carritoCompra))
    const idProduct = cart.length - 1;
    cart.push({
        idProduct: {
            product
        },
    }
    )
    localStorage.setItem(carritoCompra, JSON.stringify(cart))
}

function deleteCart(i) {
    const cart = JSON.parse(localStorage.getItem(carritoCompra))
    cart.splice(i, 1)
    localStorage.setItem(carritoCompra, JSON.stringify(cart))
}

function clearStorage() {
    localStorage.removeItem(carritoCompra)
    setData();
}
module.exports = { getData, setData, updateCart, deleteCart, clearStorage }