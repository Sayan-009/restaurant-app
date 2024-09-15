import { useState } from "react";
import Card from "./components/Card";
import food from "./food.js";
import Summery from "./components/Summery.jsx";

function App() {
  const [product, setProduct] = useState([new Map()]);
  const [cartOpen, setCartOpen] = useState(false);
  function handleProduct(new_product) {
    const key = new_product.id;
    const value = new_product;
    const new_product_list = [...product];
    if (new_product.quantity != 0) {
      new_product_list[0].set(key, value);
    } else {
      new_product_list[0].delete(key);
    }
    setProduct(new_product_list);
  }

  return (
    <main>
      <div className="product-area">
        {food.map((food_item, index) => {
          return (
            <Card
              key={index}
              food_item={food_item}
              handleProduct={handleProduct}
            />
          );
        })}
      </div>
      <div
        className="price-summery"
        style={{
          backgroundColor: cartOpen && "rgba(227, 224, 224, 0.2)",
          backdropFilter: cartOpen && "blur(10px)",
        }}
      >
        <button onClick={() => setCartOpen(!cartOpen)}>
          {cartOpen ? "Close" : "Cart"}
        </button>
        {cartOpen && <Summery food_list={product[0]} />}
      </div>
    </main>
  );
}

export default App;
