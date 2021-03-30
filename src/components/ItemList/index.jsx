import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => {
                    return <Item key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default ItemList