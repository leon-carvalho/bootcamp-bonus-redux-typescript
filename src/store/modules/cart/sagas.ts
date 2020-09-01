import { all, takeLatest } from "redux-saga/effects";

function checkProductStock() {
  console.log("adicionou ao carrinho");
}

export default all([
  takeLatest("@cart/ADD_PRODUCT_TO_CART", checkProductStock),
]);
