import React, { Component } from "react";
import Product from "./Product";
import { storeProducts } from "../data";
import Title from "./Title";
import { ProductConsumer } from "../context";

class Productlist extends Component {
  state = {
    products: storeProducts
  };

  render() {
    return (
      <div>
        <Title title=" Products " name=" Our " />
        <div>
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default Productlist;
