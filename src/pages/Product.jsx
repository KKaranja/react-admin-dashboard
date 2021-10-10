import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Charts from "../components/Charts";

import { productData } from "./../dummyData";

const Container = styled.div`
  flex: 4;
  padding: 1.25rem;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.h1``;

const ProductAddButton = styled.button`
  width: 5rem;
  border: none;
  padding: 0.3125rem;
  background-color: teal;
  color: white;
  border-radius: 0.3125rem;
  cursor: pointer;
  font-size: 1rem;
`;

const ProductTop = styled.div`
  display: flex;
`;

const ProductTopLeft = styled.div`
  flex: 1;
`;

const ProductTopRight = styled.div`
  flex: 1;
  padding: 1.25rem;
  margin: 1.25rem;
  -webkit-box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.2);
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const ProductInfoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.25rem;
`;

const ProductName = styled.span`
  font-weight: 600;
`;

const ProductInfoBottom = styled.div`
  margin-top: 0.625rem;
`;

const ProductInfoItem = styled.div`
  width: 9.375rem;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoKey = styled.span``;

const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductBottom = styled.div`
  padding: 1.25rem;
  margin: 1.25rem;
  -webkit-box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.2);
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductLabel = styled.label`
  margin-bottom: 0.625rem;
  color: gray;
`;

const ProductNameInput = styled.input`
  margin-bottom: 0.625rem;
  border: none;
  padding: 0.3125rem;
  border-bottom: 0.0625rem solid gray;
`;

const InStock = styled.select`
  margin-bottom: 0.625rem;
`;

const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;

const ProductUploadImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.625rem;
  object-fit: cover;
  margin-right: 1.25rem;
`;

const ProductButton = styled.button`
  border: none;
  padding: 0.3125rem;
  border-radius: 5px;
  background-color: darkblue;
  cursor: pointer;
  color: white;
  font-weight: 600;
`;

export const Product = () => {
  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to='/newproduct'>
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Charts
            data={productData}
            dataKey='Sales'
            title='Sales Performance'
          />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductInfoImg
              src='https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              alt=''
            />
            <ProductName>David Švihovec</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id: </ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales: </ProductInfoKey>
              <ProductInfoValue>11123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>active: </ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock: </ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductLabel>Product Name</ProductLabel>
            <ProductNameInput type='text' placeholder='Smart Watch' />
            <ProductLabel>In Stock</ProductLabel>
            <InStock name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </InStock>
            <ProductLabel>Active</ProductLabel>
            <InStock name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </InStock>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg
                src='https://images.unsplash.com/photo-1549482199-bc1ca6f58502?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
                alt=''
              />
              <label for='file' style={{ cursor: "pointer" }}>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: "none" }} />
            </ProductUpload>
            <ProductButton> Update </ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
};
