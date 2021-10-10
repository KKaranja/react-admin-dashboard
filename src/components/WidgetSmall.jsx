import styled from "styled-components";
import { Visibility } from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 2px 2px 6px 1px #949393;
  box-shadow: 2px 2px 6px 1px #949393;
  padding: 1.25rem;
  margin-right: 1.25rem;
`;

const WidgetTitle = styled.span`
  font-size: 1.375rem;
  font-weight: 600;
`;

const WidgetSmallList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const WidgetSmallListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.25rem 0rem;
`;

const ProfileImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const WidgetSmallUser = styled.div`
  display: flex;
  flex-direction: column;
`;
const WidgetSmallUsername = styled.span`
  font-weight: 600;
`;

const WidgetSmallJobTitle = styled.span`
  font-weight: 300;
`;

const WidgetSmallIcon = styled.div`
  font-size: 1rem !important;
  margin-right: 0.3125rem;
`;

const WidgetSmallButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.625rem;
  padding: 0.4375rem 0.625rem;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
  justify-content: center;
`;

const WidgetSmall = () => {
  return (
    <Container>
      <WidgetTitle>New Join Members</WidgetTitle>
      <WidgetSmallList>
        <WidgetSmallListItem>
          <ProfileImage src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png' />
          <WidgetSmallUser>
            <WidgetSmallUsername>Isaac Kimura</WidgetSmallUsername>
            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
          </WidgetSmallUser>

          <WidgetSmallButton>
            <Visibility
              style={{ fontSize: "16px !important", marginRight: "5px" }}
            />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>
        <WidgetSmallListItem>
          <ProfileImage src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png' />
          <WidgetSmallUser>
            <WidgetSmallUsername>Isaac Kimura</WidgetSmallUsername>
            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
          </WidgetSmallUser>

          <WidgetSmallButton>
            <Visibility
              style={{ fontSize: "16px !important", marginRight: "5px" }}
            />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>
        <WidgetSmallListItem>
          <ProfileImage src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png' />
          <WidgetSmallUser>
            <WidgetSmallUsername>Isaac Kimura</WidgetSmallUsername>
            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
          </WidgetSmallUser>

          <WidgetSmallButton>
            <Visibility
              style={{ fontSize: "16px !important", marginRight: "5px" }}
            />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>
        <WidgetSmallListItem>
          <ProfileImage src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png' />
          <WidgetSmallUser>
            <WidgetSmallUsername>Isaac Kimura</WidgetSmallUsername>
            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
          </WidgetSmallUser>

          <WidgetSmallButton>
            <Visibility
              style={{ fontSize: "16px !important", marginRight: "5px" }}
            />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>
        <WidgetSmallListItem>
          <ProfileImage src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png' />
          <WidgetSmallUser>
            <WidgetSmallUsername>Isaac Kimura</WidgetSmallUsername>
            <WidgetSmallJobTitle>Software Engineer</WidgetSmallJobTitle>
          </WidgetSmallUser>

          <WidgetSmallButton>
            <Visibility
              style={{ fontSize: "16px !important", marginRight: "5px" }}
            />
            Display
          </WidgetSmallButton>
        </WidgetSmallListItem>
      </WidgetSmallList>
    </Container>
  );
};

export default WidgetSmall;
