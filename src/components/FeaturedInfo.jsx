import styled from "styled-components";

import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FeaturedItems = styled.div`
  flex: 1;
  margin: 0px 1.25rem;
  padding: 1.875rem;
  border-radius: 0.625rem;
  cursor: pointer;
  -webkit-box-shadow: 2px 2px 6px 1px #949393;
  box-shadow: 2px 2px 6px 1px #949393;
`;

const FeaturedTitle = styled.span`
  font-size: 1.25rem;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0rem;
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 1.875rem;
  font-weight: 600;
`;

const FeaturedMoneyRates = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
`;

const FeaturedIcons = styled.div`
  margin-left: 0.3125rem;
  color: green;
  color: ${(props) => (props.type === "positive" ? "green" : "red")};
`;

const FeaturedSubTitles = styled.span`
  font-size: 0.9375rem;
  color: gray;
`;

const FeaturedInfo = () => {
  return (
    <Container>
      <FeaturedItems>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,415</FeaturedMoney>
          <FeaturedMoneyRates>
            -11.4
            <FeaturedIcons>
              <ArrowDownward />
            </FeaturedIcons>
          </FeaturedMoneyRates>
        </FeaturedMoneyContainer>
        <FeaturedSubTitles>Compared To Last Month</FeaturedSubTitles>
      </FeaturedItems>
      <FeaturedItems>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedMoneyRates>
            -1.4
            <FeaturedIcons>
              <ArrowDownward />
            </FeaturedIcons>
          </FeaturedMoneyRates>
        </FeaturedMoneyContainer>
        <FeaturedSubTitles>Compared To Last Month</FeaturedSubTitles>
      </FeaturedItems>
      <FeaturedItems>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,225</FeaturedMoney>
          <FeaturedMoneyRates>
            4.8
            <FeaturedIcons type='positive'>
              <ArrowUpward />
            </FeaturedIcons>
          </FeaturedMoneyRates>
        </FeaturedMoneyContainer>
        <FeaturedSubTitles>Compared To Last Month</FeaturedSubTitles>
      </FeaturedItems>
    </Container>
  );
};

export default FeaturedInfo;
