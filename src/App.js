import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Categories from './components/Categories';
import Cart from './components/Cart';

import cart from './img/shopingcart.svg';
import languagePlanet from './img/languagePlanet.svg';
import vkIcon from './img/VK.svg';
import telegramIcon from './img/Telegram.svg';
import whatsappIcon from './img/Whatsapp.svg';

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
                            <img className="Cart-icon" src={cart} alt="Cart"/>
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
                        <div className='Footer-container'>
                            <Link className='Footer-Shop-name' to='/'>QPICK</Link>
                            <div className='Quick-links'>
                                <ul>
                                    <li>Избранное</li>
                                    <li><Link className='Footer-cartlink' to='/cart'>Корзина</Link></li>
                                    <li>Контакты</li>
                                </ul>
                            </div>
                            <div className='Quick-links'>
                                <ul>
                                    <li>Условия сервиса</li>
                                    <li>
                                        <img className='LangButton' src={languagePlanet} alt="Langs"/>
                                        <div className='LangButton active'>Рус</div>
                                        <div className='LangButton'>Eng</div>
                                    </li>
                                </ul>
                            </div>
                            <div className='SocialsContainer'>
                                <img className='SocialsButton' src={vkIcon} alt="VK" />
                                <img className='SocialsButton' src={telegramIcon} alt="Telegram" />
                                <img className='SocialsButton' src={whatsappIcon} alt="Whatsapp" />
                            </div>
                        </div>
                        
                    </footer>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
