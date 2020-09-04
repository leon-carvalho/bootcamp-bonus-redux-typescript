import React from "react";
import { useSelector } from "react-redux";
import { screen, render } from "@testing-library/react";

import Cart from "../../components/Cart";

jest.mock("react-redux");

const mockUseSelector = useSelector as jest.Mock;

describe("components", () => {
  describe("cart", () => {
    beforeEach(() => {
      mockUseSelector.mockImplementation((cb) =>
        cb({
          cart: {
            items: [
              {
                product: {
                  id: 1,
                  title: "PC Gamer Parrudo",
                  price: 4889.9,
                },
                quantity: 2,
              },
            ],
          },
        })
      );
    });

    it("should render heading", () => {
      render(<Cart />);

      const { getByText } = screen;

      expect(getByText(/produto/i)).toBeInTheDocument();
      expect(getByText(/preço/i)).toBeInTheDocument();
      expect(getByText(/quantidade/i)).toBeInTheDocument();
      expect(getByText(/subtotal/i)).toBeInTheDocument();
    });

    it("should get cart items from redux and display it", () => {
      render(<Cart />);

      const { getByText } = screen;

      expect(getByText("2")).toBeInTheDocument();
      expect(getByText("R$ 4,889.90")).toBeInTheDocument();
      expect(getByText("R$ 9,779.80")).toBeInTheDocument();
      expect(getByText(/pc gamer parrudo/i)).toBeInTheDocument();
    });
  });
});
