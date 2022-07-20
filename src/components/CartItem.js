import React, { useEffect } from 'react';
import '../css/App.css';

function CartItem(props) {
    return (
        <div className="CartItem" key={'product' + props.product.id}>
            <img src={require("../img/goodsImages/" + props.product.img)}></img>
            <div className='CartProductName'>{props.product.title}</div>
            <div className='CartProductPrice'>{props.product.price}</div>
            <div className='CartProductMinus' onClick={() => props.remove(props.product.id)}>-</div>
            <div className='CartProductCount'>{props.getCount(props.product.id)}</div>
            <div className='CartProductPlus' onClick={() => props.add(props.product.id)}>+</div>
            <div className='CartProductRemove' onClick={() => props.setCount(props.product.id, 0)}>Удалить</div>
            <div className='CartProductTotalPrice'>{props.product.price * props.getCount(props.product.id)}</div>
        </div>
    );
}

export default CartItem;