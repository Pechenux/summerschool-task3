import '../css/App.css';
import Card from './Card';

function GoodsGrid(props) {
    return (
        <div className="GoodsGrid">
            {
                props.goods.map((product, index) => {
                    return (
                        <Card key={product.id}  add={props.add} product={product} />
                    )
                })
            }
        </div>
    );
}

export default GoodsGrid;