import React from 'react';
import '../css/App.css';
import GoodsGrid from './GoodsGrid';

function Category(props) {
    return (
        <div className="Category">
            <div className="CategoryName">
                {props.categoryName}
            </div>
            <GoodsGrid add={props.add} goods={props.goods} />
        </div>
    );
}

export default Category;