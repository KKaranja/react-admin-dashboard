import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 2px 2px 6px 1px #949393;
  box-shadow: 2px 2px 6px 1px #949393;
  padding: 1.25rem;
`;

const WidgetLargeTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
`;

const WidgetLargeTable = styled.table`
  width: 100%;
  border-spacing: 1.25rem;
`;

const WidgetLargeTr = styled.tr``;

const WidgetLargeTh = styled.th`
  text-align: left;
`;

const WidgetLargeUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const WidgetLargeImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.625rem;
`;

const WidgetLargeName = styled.span``;

const WidgetLargeDate = styled.td`
  font-weight: 300;
`;

const WidgetLargeAmount = styled.td`
  font-weight: 300;
`;

const WidgetLargeStatus = styled.td``;

const Button = ({ type }) => {
  return <button className={"WidgetLargeButton " + type}> {type}</button>;
};

const WidgetLarge = () => {
  return (
    <Container>
      <WidgetLargeTitle>Latest Transactions</WidgetLargeTitle>
      <WidgetLargeTable>
        <WidgetLargeTr>
          <WidgetLargeTh>Customer</WidgetLargeTh>
          <WidgetLargeTh>Date</WidgetLargeTh>
          <WidgetLargeTh>Amount</WidgetLargeTh>
          <WidgetLargeTh>Status</WidgetLargeTh>
        </WidgetLargeTr>
        <WidgetLargeTr>
          <WidgetLargeUser>
            <WidgetLargeImg src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png' />
            <WidgetLargeName>Isaac Kimura</WidgetLargeName>
          </WidgetLargeUser>
          <WidgetLargeDate>2 June 2012</WidgetLargeDate>
          <WidgetLargeAmount>$122.00</WidgetLargeAmount>
          <WidgetLargeStatus>
            <Button type='Approved' />
          </WidgetLargeStatus>
        </WidgetLargeTr>
        <WidgetLargeTr>
          <WidgetLargeUser>
            <WidgetLargeImg src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png' />
            <WidgetLargeName>Isaac Kimura</WidgetLargeName>
          </WidgetLargeUser>
          <WidgetLargeDate>2 June 2012</WidgetLargeDate>
          <WidgetLargeAmount>$122.00</WidgetLargeAmount>
          <WidgetLargeStatus>
            <Button type='Declined' />
          </WidgetLargeStatus>
        </WidgetLargeTr>
        <WidgetLargeTr>
          <WidgetLargeUser>
            <WidgetLargeImg src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png' />
            <WidgetLargeName>Isaac Kimura</WidgetLargeName>
          </WidgetLargeUser>
          <WidgetLargeDate>2 June 2012</WidgetLargeDate>
          <WidgetLargeAmount>$122.00</WidgetLargeAmount>
          <WidgetLargeStatus>
            <Button type='Pedding' />
          </WidgetLargeStatus>
        </WidgetLargeTr>
        <WidgetLargeTr>
          <WidgetLargeUser>
            <WidgetLargeImg src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png' />
            <WidgetLargeName>Isaac Kimura</WidgetLargeName>
          </WidgetLargeUser>
          <WidgetLargeDate>2 June 2012</WidgetLargeDate>
          <WidgetLargeAmount>$122.00</WidgetLargeAmount>
          <WidgetLargeStatus>
            <Button type='Approved' />
          </WidgetLargeStatus>
        </WidgetLargeTr>
      </WidgetLargeTable>
    </Container>
  );
};

export default WidgetLarge;
