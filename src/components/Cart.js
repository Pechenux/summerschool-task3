import React, { useEffect, useState } from 'react';
import '../css/App.css';
import data from './data.js'

import CartItem from './CartItem';

function Cart(props) {
    const [cartList, setCartList] = useState({});

    function getProductById(id) {
        for (let category in data) {
            let products = data[category].filter(product => product.id == id);
            if (products.length >= 1)
                return products[0];
        }
        return { id: id, img: "", title: "Error", price: 0, rate: 0 };
    }

    function getTotalPrice() {
        let totalPrice = 0;
        Object.keys(cartList).map((key, i) => {
            totalPrice += getProductById(key).price * cartList[key];
            return key;
        })
        return totalPrice;
    }

    useEffect(() => {
        let cartListFromSession = sessionStorage.getItem("Cart");
        let cart = {};
        if (cartListFromSession)
            cart = JSON.parse(cartListFromSession);

        setCartList(cart);
    }, [props.cartCount]);

    return (
        <div className="Cart">
            <div className='CartTitle'>Корзина</div>
            <div className='CartContainer'>
                <div className='CartList'>
                    {Object.keys(cartList).map((key, i) => {
                        return (<CartItem add={props.add} remove={props.remove} getCount={props.getCount} setCount={props.setCount} product={getProductById(key)} key={key} />)
                    })}
                </div>
                <div className='CartCheckout'>
                    <div className='CartTotalPrice'>
                        <div className='CartTotalPriceText first'>Итого</div>
                        <div className='CartTotalPriceText second'>{getTotalPrice()}</div>
                    </div>
                    <div className='CartCheckoutButton'>Перейти к оформлению</div>
                </div>
            </div>
        </div>
    );
}

export default Cart;