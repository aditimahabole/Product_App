import React from "react";
import { styled } from "styled-components";
import '../App.css'

const ProductItems = ({
  id,
  title,
  description,
  price,
  photo,
  rating,
  category,
  brand,
}) => {
  return (
    <ProductItemBox>
      <ImageDiv>
        <ProductImage src={photo} alt={title} className="photo" />
      </ImageDiv>
      <MiddleDiv>
      <TitleDiv>
      <ProductTitle>{title}</ProductTitle>
      </TitleDiv>
          
          <br></br>
          <JustDiv>
          <ProductBrand>{brand}</ProductBrand>
        
          
        <ProductCategory>{category}</ProductCategory>
          </JustDiv>
          <br></br>

          <ProductDescription>{description.slice(0,50)}...</ProductDescription>
          
    
      </MiddleDiv>
      <BottomDiv>
        <div>{price}</div>
        <div>{rating} </div>
      </BottomDiv>
    </ProductItemBox>
  );
};
const JustDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;

`
const ProductItemBox = styled.section`
margin:10px;
border-radius:10px;
  
  height: 400px;
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  padding:20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
const ImageDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
  height:40%;
  border-radius:5px;
  background: rgb(17,144,181);
background: linear-gradient(90deg, rgba(17,144,181,1) 35%, rgba(133,246,251,1) 77%);
padding:10px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  
`;
const MiddleDiv = styled.div`
height:50%;
${'' /* background:teal; */}
padding:5px;
`;
const TitleDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const ProductTitle = styled.h2`
  
  color: black;
  font-weight: bolder;
  font-size: 16px;
  align-itself:center;
  align-items:center;
  
`;
const ProductBrand = styled.span`
  
  color: black;
  font-weight: bold;
  font-size: 12px;
  padding:5px 10px;
  border-radius:5px;
  background: #1190b5;
  color:#e0e0e0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

`;
const ProductCategory = styled.span`
  
  font-weight: bold;
  font-size: 12px;
  padding:5px 10px;
  border-radius:5px;
  background: #85f6fb;
  color:white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
const ProductDescription = styled.p`
  
  color: #333;
  font-size: 13px;
  margin:0px 5px;
  font-family: 'Roboto', sans-serif;
`;
const BottomDiv = styled.div`
display:flex;
flex-direction:row;
padding:10px;
height:5%;
justify-content:space-around;
font-family: 'Roboto', sans-serif;
`;
const ProductImage = styled.img`
  height: 100%;
  width: 50%;
  align-itself:center;
  border-radius:10px;
  
  background-color: red;
  border-radius:50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
export default ProductItems;
