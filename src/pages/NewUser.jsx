import styled from "styled-components";

const NewUser = () => {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <NewUserLabel> Username </NewUserLabel>
          <NewUserInput type='text' placeholder='isaac' />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel> Full Name </NewUserLabel>
          <NewUserInput type='text' placeholder='Isaac Karanja' />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel> Email </NewUserLabel>
          <NewUserInput type='email' placeholder='isaackimura@gmail.com' />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel> Password </NewUserLabel>
          <NewUserInput type='password' placeholder='password' />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel> Phone </NewUserLabel>
          <NewUserInput type='text' placeholder='+254 724123456' />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel> Address </NewUserLabel>
          <NewUserInput type='text' placeholder='6200 Nairobi, Kenya' />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel>Gender</NewUserLabel>
          <NewUserGender>
            <NewUserGenderInput
              type='radio'
              name='gender'
              id='male'
              value='male'
            />
            <GenderRadioLabel for='male'>Male</GenderRadioLabel>
            <NewUserGenderInput
              type='radio'
              name='gender'
              id='female'
              value='female'
            />
            <GenderRadioLabel for='female'> Female </GenderRadioLabel>
            <NewUserGenderInput
              type='radio'
              name='gender'
              id='other'
              value='other'
            />
            <GenderRadioLabel htmlFor='other'> Other </GenderRadioLabel>
          </NewUserGender>
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel> Active </NewUserLabel>
          <NewUserSelect name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </NewUserSelect>
        </NewUserItem>
        <NewUserButton> Create </NewUserButton>
      </NewUserForm>
    </Container>
  );
};

export default NewUser;

const Container = styled.div`
  flex: 4;
`;

const NewUserTitle = styled.h1``;

const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.5rem;
`;

const NewUserItem = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;
  margin-right: 1.25rem;
`;

const NewUserLabel = styled.label`
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  color: #918f8f;
`;

const NewUserInput = styled.input`
  height: 1.25rem;
  padding: 0.625rem;
  border: 0.0625rem solid gray;
  border-radius: 0.3125rem;
`;

const NewUserGender = styled.div``;
const NewUserGenderInput = styled.input`
  margin-top: 0.9375rem;
`;

const GenderRadioLabel = styled.label`
  margin: 0.625rem;
  font-size: 1.125rem;
  color: #555;
`;

const NewUserSelect = styled.select`
  height: 2.5rem;
  border-radius: 0.3125rem;
  color: #555;
`;

const NewUserButton = styled.button`
  width: 12.5rem;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 0.4375rem 0.625rem;
  font-weight: 600;
  border-radius: 0.625rem;
  margin-top: 1.875rem;
  cursor: pointer;
`;
