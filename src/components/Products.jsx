// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// // import { popularProducts } from '../data';
// import Product from './Product';
// import axios from "axios"



// const Container = styled.div`
//     padding: 20px;
//     display: flex;
//     flex-wrap: wrap;
    
//     justify-content: space-between;
// `;
// const Products = (props) => {

//     const [products, setProducts] = useState([])
//     const [filterProducts, setFilterProducts] = useState([])

//     useEffect(() => {
//         const getProducts = async () => {
//             try {
//                 const res = await axios.get(props.cat ? `http://localhost:5000/api/products?category=${props.cat}` : "http://localhost:5000/api/products");
//                 setProducts(res.data);
//             } catch (error) {

//             }
//         };
//         getProducts();

//     }, [props.cat])

//     useEffect(() => {
//         props.cat &&
//             setFilterProducts(
//                 products.filter((item) =>
//                     Object.entries(props.filters).every(([key, value]) =>
//                         item[key].includes(value)
//                     )
//                 )
//             );
//     }, [products, props.cat, props.filters]);
    
//     return (
//         <Container>
//             {filterProducts.map((item) => (
//                 <Product
//                     id={item.id}
//                     img={item.img}
//                 />
//             ))}

//         </Container>
//     )
// }

// export default Products

import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        // console.log(res);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product img = {item.img} item={item} key={item.id} id = {item._id} />)
        : products
            .slice(0, 10)
            .map((item) => <Product img = {item.img} item={item} id = {item._id} />)}
    </Container>
  );
};

export default Products;