/* eslint-disable react/prop-types */

function Price({ food }) {
  return (
    <div className="price-set">
      <div className="image">
        <img src={`./src/assets/images/${food.image}`} alt={food.name} />
      </div>
      <div className="left">
        <p>{food.name}</p>
        <p>
          <span>
            item: {food.quantity} price: {food.price}
          </span>
        </p>
      </div>
      <p className="right">{food.total_price}</p>
    </div>
  );
}

export default Price;
