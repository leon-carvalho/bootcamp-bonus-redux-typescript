import reducer, { INITIAL_STATE } from "../../../store/modules/cart/reducer";
import {
  addProductToCartRequest,
  addProductToCartSuccess,
  addProductToCartFailure,
} from "../../../store/modules/cart/actions";

const productMock = {
  id: 1,
  price: 112.99,
  title: "Mochila Resiliente",
};

describe("Cart reducer", () => {
  test("@cart/ADD_PRODUCT_TO_CART_REQUEST", () => {
    const state = reducer(INITIAL_STATE, addProductToCartRequest(productMock));

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  test("@cart/ADD_PRODUCT_TO_CART_SUCCESS", () => {
    const state = reducer(INITIAL_STATE, addProductToCartSuccess(productMock));

    expect(state).toStrictEqual({
      failedStockCheck: [],
      items: [{ product: productMock, quantity: 1 }],
    });
  });

  test("@cart/ADD_PRODUCT_TO_CART_FAILURE", () => {
    const state = reducer(
      INITIAL_STATE,
      addProductToCartFailure(productMock.id)
    );

    expect(state).toStrictEqual({
      failedStockCheck: [productMock.id],
      items: [],
    });
  });
});
