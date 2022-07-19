import React from 'react';
import '../css/App.css';

function Card(props) {
    return (
        <div key={'product' + props.product.id} className="Card">
            <div className='CardContent'>
                <img className='CardImage' src={require("../img/goodsImages/" + props.product.img)}></img>
                <div className='CardDescription'>
                    <div className='CardRow'>
                        <div className='ProductName'>{props.product.title}</div>
                        <div className='ProductPrice'>{props.product.price} ₽</div>
                    </div>
                    <div className='CardRow'>
                        <div className='ProductRate'>{props.product.rate}</div>
                        <div onClick={() => props.add(props.product.id)} className='BuyButton'>Купить</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;