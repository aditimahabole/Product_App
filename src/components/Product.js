import React, { useState, useEffect } from "react";

import { styled } from "styled-components";
import ProductItems from "./ProductItems";

const Product = () => {
  const [data, setData] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Define the API endpoint you want to fetch data from
    const apiUrl = "https://dummyjson.com/products/"; // Replace with your API URL
    console.log("API URL : ", apiUrl);

    // Use the fetch function to make the API request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        setData(data.products);
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error);
        setLoading(false); // Set loading to false
      });
  }, []); // The empty array as the second argument makes this effect run only once, similar to componentDidMount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      {data.map((item,key) => {
        return(
            <ProductItems
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          photo={item.thumbnail}
          rating={item.rating}
          category={item.category}
          brand={item.brand}
        />
        )
       
      })}
    </Container>
  );
};
const Container = styled.section`
  
  
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;
export default Product;
