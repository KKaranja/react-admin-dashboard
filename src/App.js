import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

import UserList from "./pages/UserList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import { Product } from "./pages/Product";
import NewProduct from "./pages/NewProduct";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  return (
    <Router>
      <Topbar />

      <Container>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:userId'>
            <User />
          </Route>
          <Route path='/newUser'>
            <NewUser />
          </Route>
          <Route path='/products'>
            <ProductList />
          </Route>
          <Route path='/product/:productId'>
            <Product />
          </Route>
          <Route path='/newproduct'>
            <NewProduct />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
