import React, { useId } from 'react';
import './App.css';

function GoodsGrid(props) {
    return (
        <div className="GoodsGrid">
            {props.numberOfCards}
            {
                [...Array(props.numberOfCards)].map((e, i) => {
                    return (
                        <div key={i} className="Card">

                        </div>
                    )
                })
            }
        </div>
    );
}

export default GoodsGrid;