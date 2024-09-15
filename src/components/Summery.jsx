/* eslint-disable react/prop-types */
import Price from "./Price";

function Summery({ food_list }) {
  if (!food_list || food_list.size === 0) {
    return <div className="message">Cart is Empty</div>;
  }

  const totalPrice = Array.from(food_list.entries()).reduce(
    (acc, [key, value]) => {
      return acc + value.total_price;
    },
    0
  );

  return (
    <div className="outside">
      <ul className="food-list">
        {Array.from(food_list.entries()).map(([key, value]) => (
          <Price key={key} food={value} />
        ))}
      </ul>
      <p className="total">Total = {totalPrice}</p>
      <button className="order">Order now</button>
    </div>
  );
}

export default Summery;
