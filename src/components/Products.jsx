import React, { useState } from "react";

import { useEffect } from "react";

import AddProduct from "../components/AddProduct";

import Pagination from "./Pagination";

import Product from "./Product";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra

  const Flex = () => <div />;
  const Grid = () => <div />;
  let [showdata, setShowdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8080/products");
      let data = await res.json();
      console.log(data);
      setShowdata(data);
    };
    getData();
  }, []);

  return (
    <>
      <Flex>
        <div>
          <AddProduct data={showdata} />
        </div>

        <Grid>
          {/* List of Products */}
          <div>
            <Product />
          </div>
        </Grid>
        {/* Pagination */}
        <div>
          <Pagination />
        </div>
      </Flex>
      {showdata.map((el) => {
        return (
          <div key={el.id}>
            <div>
              <img src={el.imageSrc} />
            </div>
            <div>{el.title}</div>
            <div>{el.category}</div>
            <div>{el.gender}</div>
            <div>{el.price}</div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
