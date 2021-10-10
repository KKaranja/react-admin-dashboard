import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";

import { DeleteOutline } from "@material-ui/icons";

import { productRows } from "../dummyData";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 4;
`;

const ProductListEdit = styled.button`
  border: none;
  border-radius: 0.625rem;
  padding: 5px 0.625rem;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 1.25rem;
`;

const ProductListDelete = styled.button`
  border: none;
  background-color: white;
  color: red;
  cursor: pointer;
  &&:hover {
    background-color: #f5f3f3;
  }
`;

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={params.row.img}
              alt='Profile'
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px",
              }}
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 190 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ProductListEdit>Edit</ProductListEdit>
            </Link>

            <ProductListDelete>
              <DeleteOutline onClick={() => handleDelete(params.row.id)} />
            </ProductListDelete>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default ProductList;
