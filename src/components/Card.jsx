/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Card({ food_item, handleProduct }) {
  const [added, setAdded] = useState(false);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (count == 0) setAdded(false);
    if (added) {
      handleProduct({
        id: food_item.id,
        name: food_item.name,
        image: food_item.src,
        quantity: count,
        price: food_item.price,
        total_price: count * food_item.price,
        status: added,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, added]);

  function cartUpdate() {
    if (!added) {
      setAdded(true);
      setCount((prev) => prev + 1);
    }
  }

  function addProduct() {
    setCount((prev) => prev + 1);
  }

  function subtractProduct() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="container">
      <div className="food-image">
        <img src={`./src/assets/images/${food_item.src}`} alt={food_item.name} />
      </div>
      <div className="description">
        <div className="cart-option">
          <button
            onClick={cartUpdate}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor:
                isHovered && !added ? "rgb(215, 30, 6)" : "white",
              color: isHovered && !added ? "white" : "rgb(215, 30, 6)",
            }}
          >
            {!added ? (
              "Add to Cart"
            ) : (
              <div className="button-inside">
                <button onClick={subtractProduct}>-</button>
                {count}
                <button onClick={addProduct}>+</button>
              </div>
            )}
          </button>
        </div>
        <span className="type">{food_item.type}</span>
        <p className="name">{food_item.name}</p>
        <span className="price">Rs. {food_item.price}</span>
      </div>
    </div>
  );
}

export default Card;
