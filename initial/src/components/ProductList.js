import React, { useEffect, useState } from "react";
import { products } from "../FakeData";
import { CART_LIST_MSG, SUCCESS_ADD_MSG, SUCCESS_REMOVE_MSG } from "./constant";
const ProductList = () => {
  const [cart, setCart] = useState([]);

  const onAdd = (e, name) => {
    e.preventDefault();
    const cartCopy = [...cart];
    cartCopy.push(name);
    console.log(SUCCESS_ADD_MSG);
    setCart(cartCopy);
  };

  const onRemove = (e, name) => {
    e.preventDefault();
    const cartCopy = [...cart];
    const index = cartCopy.indexOf(name);
    if (index !== -1) {
      cartCopy.splice(index, 1);
    }

    console.log(SUCCESS_REMOVE_MSG);
    setCart(cartCopy);
  };

  useEffect(() => {
    console.log(CART_LIST_MSG, cart);
  }, [cart]);

  return (
    <div className="main">
      {products.data.map((product) => {
        return (
          <div className="category">
            <h1>{product.name}</h1>
            <hr />
            {product.productList.map((item) => {
              return (
                <form>
                  <h3>Name : {item.name}</h3>
                  <h3>Price : ${item.price}</h3>
                  <button onClick={(e) => onAdd(e, item.name)}>
                    ADD TO CART
                  </button>
                  <button onClick={(e) => onRemove(e, item.name)}>
                    REMOVE FROM A CART
                  </button>
                </form>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
