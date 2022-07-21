import React, {  } from 'react';
import '../css/App.css';

import trashbin from '../img/trashBin.svg'

function CartItem(props) {
    return (
        <div className="CartItem" key={'product' + props.product.id}>
            <div className='CartItemContainer'>
                <div className='CartItemColumn first'>
                    <img src={require("../img/goodsImages/" + props.product.img)} alt={props.product.img}></img>
                    <div className='CartCountControls'>
                        <div className='CartProductMinus' onClick={() => props.remove(props.product.id)}>-</div>
                        <div className='CartProductCount'>{props.getCount(props.product.id)}</div>
                        <div className='CartProductPlus' onClick={() => props.add(props.product.id)}>+</div>
                    </div>
                </div>
                <div className='CartItemColumn second'>
                    <div className='CartItemText'>
                        <div className='CartProductName'>{props.product.title}</div>
                        <div className='CartProductPrice'>{props.product.price} ₽</div>
                    </div>
                </div>
                <div className='CartItemColumn third'>
                    <div className='CartProductRemove' onClick={() => props.setCount(props.product.id, 0)}>
                        <img src={trashbin} alt="trashbin"/>
                    </div>
                    <div className='CartProductTotalPrice'>{props.product.price * props.getCount(props.product.id)} ₽</div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;