import React, { useState, useEffect } from "react";

import api from "../services/api";
import { formatPrice } from "../utils/format";
import { IProduct } from "../store/modules/cart/types";

import CatalogItem from "./CatalogItem";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      if (response) {
        const data = response.data.map((item: IProduct) => ({
          ...item,
          formattedPrice: formatPrice(item.price),
        }));

        setCatalog(data);
      }
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => {
        return <CatalogItem key={product.id} product={product} />;
      })}
    </main>
  );
};

export default Catalog;
