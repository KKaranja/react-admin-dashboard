import styled from "styled-components";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";

const User = () => {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <UserAddButton>Create</UserAddButton>
      </UserTitleContainer>
      <UserContainer>
        <UserDisplay>
          <UserDisplayTop>
            <UserDisplayImg
              src='https://openclipart.org/image/800px/294868'
              alt=''
            />
            <UserTopTitle>
              <UserDisplayUsername> Isaac Kimura </UserDisplayUsername>
              <UserDisplayUserTitle> Software Engineer </UserDisplayUserTitle>
            </UserTopTitle>
          </UserDisplayTop>
          <UserDisplayBottom>
            <UserDisplayTitle> Account Details </UserDisplayTitle>
            <UserDisplayInfo>
              <UserDisplayIcon>
                <PermIdentity />
              </UserDisplayIcon>
              <UserDisplayInfoTitle> KKaranja67 </UserDisplayInfoTitle>
            </UserDisplayInfo>
            <UserDisplayInfo>
              <UserDisplayIcon>
                <CalendarToday />
              </UserDisplayIcon>
              <UserDisplayInfoTitle> 19.12.1988 </UserDisplayInfoTitle>
            </UserDisplayInfo>
            <UserDisplayTitle> Contact Details </UserDisplayTitle>
            <UserDisplayInfo>
              <UserDisplayIcon>
                <PhoneAndroid />
              </UserDisplayIcon>
              <UserDisplayInfoTitle> +254 724000890 </UserDisplayInfoTitle>
            </UserDisplayInfo>
            <UserDisplayInfo>
              <UserDisplayIcon>
                <MailOutline />
              </UserDisplayIcon>
              <UserDisplayInfoTitle>isaackimura@gmail.com</UserDisplayInfoTitle>
            </UserDisplayInfo>
            <UserDisplayInfo>
              <UserDisplayIcon>
                <LocationSearching />
              </UserDisplayIcon>
              <UserDisplayInfoTitle>62000 Nairobi, Kenya</UserDisplayInfoTitle>
            </UserDisplayInfo>
          </UserDisplayBottom>
        </UserDisplay>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <UserInfoLabel>Username</UserInfoLabel>
                <UserUpdateInput type='text' placeholder='KKaranja67' />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserInfoLabel>Full Name</UserInfoLabel>
                <UserUpdateInput type='text' placeholder='Isaac K. Kimura' />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserInfoLabel>Email</UserInfoLabel>
                <UserUpdateInput
                  type='text'
                  placeholder='isaackimura@gmail.com'
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserInfoLabel>Phone</UserInfoLabel>
                <UserUpdateInput type='text' placeholder='+254 724000890' />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserInfoLabel>Address</UserInfoLabel>
                <UserUpdateInput
                  type='text'
                  placeholder='62000 Nairobi, Kenya'
                />
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserProfUpdateUpload>
                <UserProfImg
                  src='https://openclipart.org/image/800px/294868'
                  alt=''
                />
                <UserProfImgLabel htmlFor='file'>
                  <Publish />
                </UserProfImgLabel>
                <UserProfImgUpload
                  type='file'
                  id='file'
                  style={{ display: "none" }}
                />
              </UserProfUpdateUpload>
              <UesrUpdateButton> Update </UesrUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;

const Container = styled.div`
  flex: 4;
  padding: 1.25rem;
`;

const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserTitle = styled.h1``;
const UserAddButton = styled.button`
  width: 5rem;
  border: none;
  padding: 0.3125rem;
  border-radius: 0.3125rem;
  background-color: teal;
  cursor: pointer;
  color: white;
  font-size: 1rem;
`;

const UserContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;

const UserDisplay = styled.div`
  flex: 1;
  padding: 1.25rem;
  -webkit-box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.2);
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 1.25rem;
  -webkit-box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.2);
  margin-left: 1.25rem;
`;

const UserDisplayTop = styled.div`
  display: flex;
  align-items: center;
`;
const UserDisplayImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const UserTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`;
const UserDisplayUsername = styled.span`
  font-weight: 600;
`;
const UserDisplayUserTitle = styled.span`
  font-weight: 300;
`;

const UserDisplayBottom = styled.div`
  margin-top: 1.25rem;
`;

const UserDisplayTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #aca9a9;
`;

const UserDisplayInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 1.25rem 0rem;
  color: #444;
`;

const UserDisplayIcon = styled.span`
  font-size: 1rem !important;
`;

const UserDisplayInfoTitle = styled.span`
  margin-left: 0.625rem;
`;

const UserUpdateTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
`;

const UserUpdateLeft = styled.div``;

const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const UserInfoLabel = styled.label`
  margin-bottom: 0.3125rem;
  font-size: 0.875rem;
`;

const UserUpdateInput = styled.input`
  border: none;
  width: 15.625rem;
  height: 1.875rem;
  border-bottom: 0.0625rem solid gray;
`;

const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserProfUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.625rem;
  object-fit: cover;
  margin-right: 1.25rem;
`;

const UserProfImgLabel = styled.label`
  cursor: pointer;
`;

const UserProfImgUpload = styled.input``;

const UesrUpdateButton = styled.button`
  border-radius: 0.3125rem;
  border: none;
  padding: 0.3125rem;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
