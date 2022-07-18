import React from 'react';
import '../css/App.css';

function Card(props) {

    return (
        <div key={'product' + props.product.id} className="Card">
            <img src={require("../img/goodsImages/" + props.product.img)}></img>
            <div className='ProductName'>{props.product.title}</div>
            <div className='ProductPrice'>{props.product.price}</div>
            <div className='ProductRate'>{props.product.rate}</div>
            <div onClick={() => props.add(props.product.id)} className='BuyButton'>Купить</div>
        </div>
    );
}

export default Card;