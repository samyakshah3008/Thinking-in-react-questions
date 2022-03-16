import { useState } from "react";

export default function Question7() {

  const list = [
    {
      id: 1,
      name: "Mango"
    },
    {
      id: 2,
      name: "Apple"
    },
    {
      id: 3,
      name: "Banana"
    },
    {
      id: 4,
      name: "Orange"
    },
    {
      id: 5,
      name: "Santara"
    }
  ];

  const [cart, setCart] = useState([]);

  const clickHandler = (parameter) => {
    // console.log(parameter);

    const productExist = cart.find((item) => item.id === parameter.id);
    // console.log(productExist);

    if (productExist) {
      setCart(
        cart.map((element) =>
          element.id === parameter.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : element
        )
      );
      // setCart([...cart, { ...parameter, qty: productExist.qty + 1 }]);
      console.log(cart);
    } else {
      setCart([...cart, { ...parameter, qty: 1 }]);
    }
  };

  return (
    <div className="App">
      <div>
        {" "}
        {list.map((data) => (
          <li>
            {" "}
            {data.name}{" "}
            <button onClick={() => clickHandler(data)}>Add to Cart</button>
            {/* Here Data is the whole array of objects list */}
          </li>
        ))}{" "}
      </div>
      <h2>My Cart</h2>
      <div>
        {" "}
        {cart.map((latestCart) => (
          <div>
            {" "}
            {latestCart.name} <span>{latestCart.qty}</span>{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
