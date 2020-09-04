import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils/format";

import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  const formattedCart = cart.map((item) => ({
    ...item,
    formattedPrice: formatPrice(item.product.price),
    subTotal: formatPrice(item.product.price * item.quantity),
  }));

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {formattedCart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.formattedPrice}</td>
            <td>{item.quantity}</td>
            <td>{item.subTotal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
