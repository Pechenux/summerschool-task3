import React from 'react';
import GoodsGrid from './GoodsGrid';

function Categories() {
    let numberOfCards = 12;

    return (
        <div className="Categories">
            <div className="Category">
                <div className="CategoryName">

                </div>
                <GoodsGrid numberOfCards={numberOfCards}>

                </GoodsGrid>
            </div>
        </div>
    );
}

export default Categories;