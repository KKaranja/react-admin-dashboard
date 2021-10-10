import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";

import { DeleteOutline } from "@material-ui/icons";

import { userRows } from "../dummyData";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 4;
  width: 100%;
`;

const UserListEdit = styled.button`
  border: none;
  border-radius: 0.625rem;
  padding: 5px 0.625rem;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 1.25rem;
`;

const UserListDelete = styled.button`
  border: none;
  background-color: white;
  color: red;
  cursor: pointer;
  &&:hover {
    background-color: #f5f3f3;
  }
`;

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={params.row.avatar}
              alt='Profile'
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px",
              }}
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 190 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <UserListEdit>Edit</UserListEdit>
            </Link>

            <UserListDelete>
              <DeleteOutline onClick={() => handleDelete(params.row.id)} />
            </UserListDelete>
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

export default UserList;
