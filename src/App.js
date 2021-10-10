import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

import UserList from "./pages/UserList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/User";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  /* height: 100vh;
  overflow: auto;
  position: relative; */
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
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
