import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import ProductItems from "./ProductItems";


const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(6);

  useEffect(() => {
    const apiUrl = "https://dummyjson.com/products/";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not able to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSort = () => {
    const compareFunction = (a, b) => {
      if (sortBy === "rate") {
        return sortOrder === "asc"
          ? 1 * (a.rating - b.rating)
          : -1 * (a.rating - b.rating);
      } else if (sortBy === "price") {
        return sortOrder === "asc"
          ? 1 * (a.price - b.price)
          : -1 * (a.price - b.price);
      } else if (sortBy === "title") {
        return sortOrder === "asc"
          ? 1 * a.title.localeCompare(b.title)
          : -1 * a.title.localeCompare(b.title);
      } else {
        return sortOrder === "asc" ? 1 * (a.id - b.id) : -1 * (a.id - b.id);
      }
    };
    setData([...data].sort(compareFunction));
  };
  const AddPages = () => {
    let page_len = Math.min(page + 6, data.length);
    console.log("minininini", page_len);
    setPage(page_len);
  };
  const DeductPages = () => {
    let page_len = Math.max(page - 6, 6);
    console.log("max", page_len);
    setPage(page_len);
  };

  return (
    <>
      <DropDownCss>
        <DropDownDivs>Shopify</DropDownDivs>
        <DropDownDivs>
          <DropDownSelection onChange={(e) => setSortBy(e.target.value)}>
            <Options value="id">Id</Options>
            <Options value="rate">Ratings</Options>
            <Options value="price">Price</Options>
            <Options value="title">Title</Options>
          </DropDownSelection>

          <DropDownSelection onChange={(e) => setSortOrder(e.target.value)}>
            <Options value="asc">Ascending</Options>
            <Options value="desc">Descending</Options>
          </DropDownSelection>
          <SortButton onClick={handleSort}>Sort</SortButton>
        </DropDownDivs>
      </DropDownCss>
      <br></br>
      <br></br>
      <br></br>

      <Container>
        {data
          .map((item) => {
            return (
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
            );
          })
          .slice(0, page)}
      </Container>
      <Container1>
        {page < data.length && <Add onClick={AddPages}>+</Add>}
        {page > 6 && <Deduct onClick={DeductPages}>-</Deduct>}
      </Container1>
    </>
  );
};
const DropDownCss = styled.div`
  height: 50px;
  width: 100%;
  background: transparent;
  background: rgba(255, 255, 255, 0.696);

  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;
const DropDownDivs = styled.div`
  margin: 2px;

  display: flex;
  justify-content: flex-start;
  padding: 10px;
  margin-right: 30px;
`;
const DropDownSelection = styled.select`
  background: teal;
  color: white;
  padding: 5px 10px;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border: none;
  margin-right: 10px;
  background: rgb(17, 144, 181);
  background: linear-gradient(
    90deg,
    rgba(17, 144, 181, 1) 44%,
    rgba(147, 200, 216, 1) 82%
  );
`;
const Options = styled.option`
  color: black;
  border: none;
  &::hover {
    color: white;
    background: rgb(17, 144, 181);
    background: linear-gradient(
      90deg,
      rgba(17, 144, 181, 1) 44%,
      rgba(147, 200, 216, 1) 82%
    );
  }
`;
const SortButton = styled.button`
  background: green;
  color: white;
  align-items: center;
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  cursor: pointer;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  flex: flex-start;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
`;
const Container1 = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  flex: flex-start;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;
const Add = styled.button`
  border-radius: 50%;

  padding: 10px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 25px;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border: none;

  background: rgb(233, 251, 0);
  background: linear-gradient(
    90deg,
    rgba(233, 251, 0, 1) 33%,
    rgba(182, 250, 0, 1) 82%
  );
`;
const Deduct = styled.button`
  border-radius: 50%;

  padding: 10px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 25px;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border: none;

  background: rgb(251, 33, 0);
  background: linear-gradient(
    90deg,
    rgba(251, 33, 0, 1) 33%,
    rgba(250, 134, 0, 1) 82%
  );
`;
export default Product;
