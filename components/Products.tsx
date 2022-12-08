import React from "react";
import Card from "./_child/Card";
import SectionHeader from "./_child/SectionHeader";
import Product2 from "./_child/Product2";
import { productsData } from "../data/sample";

function Products() {
  return (
    <Card>
      <SectionHeader title="Products" />

      <div className="flex flex-row justify-between">
        {productsData.map((product) => (
          <Product2 key={product.id} product={product} />
        ))}
      </div>
    </Card>
  );
}

export default Products;
