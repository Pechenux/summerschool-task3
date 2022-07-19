import React from 'react';
import Category from './Category';
import data from './data.js'

function Categories(props) {
    return (
        <div className="Categories">
            {Object.keys(data).map((key, index) => {
                return (<Category add={props.add} key={`category${key}`} categoryName={key} goods={data[key]} />)
            }) }
        </div>
    );
}

export default Categories;