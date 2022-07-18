import React, { useEffect } from 'react';
import '../css/App.css';

function CartItem(props) {
    return (
        <div className="CartItem" key={'product' + props.product.id}>
            <img src={require("../img/goodsImages/" + props.product.img)}></img>
            <div className='ProductName'>{props.product.title}</div>
            <div className='ProductPrice'>{props.product.price}</div>
            <div className='ProductMinus' onClick={() => props.remove(props.product.id)}>-</div>
            <div className='ProductCount'>{props.getCount(props.product.id)}</div>
            <div className='ProductPlus' onClick={() => props.add(props.product.id)}>+</div>
            <div className='ProductRemove' onClick={() => props.setCount(props.product.id, 0)}>Удалить</div>
        </div>
    );
}

export default CartItem;