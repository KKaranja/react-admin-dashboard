import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 1.875rem;
  color: darkblue;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopbarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 0.625rem;
  color: #555;
`;

const TopIconBadge = styled.span`
  width: 0.9375rem;
  height: 0.9375rem;
  position: absolute;
  top: ${(props) => (props.type === "filled" ? "-7px" : "-0.25rem")};
  right: ${(props) => (props.type === "filled" ? "23px" : "3.3125rem")};
  /* background-color: red; */
  background-color: ${(props) => (props.type === "filled" ? "tomato" : "red")};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
`;

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

const Topbar = () => {
  return (
    <Container>
      <TopbarWrapper>
        <TopLeft>
          <Logo>KimuraAdmin</Logo>
        </TopLeft>
        <TopRight>
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
            <Language />
            <TopIconBadge type='filled'></TopIconBadge>
            <Settings />
          </TopbarIconContainer>
          <Image
            src='https://avatars.githubusercontent.com/u/37881972?v=4'
            alt=''
          />
        </TopRight>
      </TopbarWrapper>
    </Container>
  );
};

export default Topbar;
