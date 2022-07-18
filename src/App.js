import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Categories from './components/Categories';
import Cart from './components/Cart';

import cart from './img/shopingcart.svg';
import './css/App.css';

function App() {
    let [cartCount, setcartCount] = useState(getTotalCount());

    function addItem(id) {
        setItemCount(id, getItemCount(id) + 1);
    }

    function removeItem(id) {
        setItemCount(id, getItemCount(id) - 1);
    }

    function getItemCount(id) {
        let cardList = sessionStorage.getItem("Cart");

        if (cardList) {
            cardList = JSON.parse(cardList);
        } else {
            cardList = {};
        }

        return cardList[id] ?? 0;
    }

    function setItemCount(id, value) {
        let cardList = sessionStorage.getItem("Cart");

        if (cardList) {
            cardList = JSON.parse(cardList);
        } else {
            cardList = {};
        }
        if (value <= 0)
            delete cardList[id]
        else
            cardList[id] = value;

        sessionStorage.setItem("Cart", JSON.stringify(cardList));
        setcartCount(getTotalCount());
    }

    function getTotalCount() {
        let totalCount = 0;
        let cardList = sessionStorage.getItem("Cart");

        if (cardList) {
            cardList = JSON.parse(cardList);
        } else {
            return 0;
        }

        for (let id in cardList) {
            totalCount += cardList[id];
        }

        return totalCount;
    }

    return (
        <div className="App">
            <BrowserRouter>
            <div className="Page">
                <header className="Page-header">
                    <Link className="Shop-name" to='/'>QPICK</Link>
                    <Link data-count={cartCount} className="Cart-button" to='/cart'>
                        <img className="Cart-icon" src={cart} />
                    </Link>
                </header>
                    <Routes>
                        <Route path='/' element={
                            <div className="Catalog">
                                <Categories add={addItem} />
                            </div>
                        } />
                        <Route path='/cart' element={
                            <Cart cartCount={cartCount} add={addItem} remove={removeItem} getCount={getItemCount} setCount={setItemCount} />
                        } />
                    </Routes>
                <footer className="Page-footer">

                </footer>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
