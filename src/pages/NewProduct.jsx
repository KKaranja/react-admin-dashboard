import styled from "styled-components";

const NewProduct = () => {
  return (
    <Container>
      <Container>
        <NewProductTitle>New Product</NewProductTitle>
        <NewProductForm>
          <NewProductItem>
            <NewProductLabel> Image</NewProductLabel>
            <input type='file' id='file' />
          </NewProductItem>
          <NewProductItem>
            <NewProductLabel> Name </NewProductLabel>
            <NewProductInput type='text' placeholder='Smart Watch' />
          </NewProductItem>
          <NewProductItem>
            <NewProductLabel> Stock </NewProductLabel>
            <NewProductInput type='text' placeholder='123' />
          </NewProductItem>
          <NewProductItem>
            <NewProductLabel> Active </NewProductLabel>
            <NewProductSelect name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </NewProductSelect>
          </NewProductItem>
          <AddProductButton> Create </AddProductButton>
        </NewProductForm>
      </Container>
    </Container>
  );
};

export default NewProduct;

const Container = styled.div`
  flex: 4;
`;

const NewProductTitle = styled.h1``;

const NewProductForm = styled.form`
  /* display: flex;
  flex-wrap: wrap; */
  margin-left: 1.5625rem;
  margin-top: 0.625rem;
`;

const NewProductItem = styled.div`
  width: 15.625rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.625rem;
`;

const NewProductLabel = styled.label`
  margin-bottom: 0.625rem;
  color: #918f8f;
  font-weight: 600;
`;

const NewProductInput = styled.input`
  padding: 0.625rem;
`;

const NewProductSelect = styled.select`
  padding: 0.625rem;
`;

const AddProductButton = styled.button`
  margin-top: 10px;
  padding: 0.4375rem 0.625rem;
  border: none;
  border-radius: 0.625rem;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
