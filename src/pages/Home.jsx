import styled from "styled-components";
import Charts from "../components/Charts";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLarge from "../components/WidgetLarge";
import WidgetSmall from "../components/WidgetSmall";
import { userData } from "../dummyData";

const Container = styled.div`
  flex: 4;
`;

const HomwWidgets = styled.div`
  display: flex;
  margin: 1.25rem;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Charts
        data={userData}
        title='User Analytics'
        grid
        dataKey='ActiveUsers'
      />
      <HomwWidgets>
        <WidgetSmall />
        <WidgetLarge />
      </HomwWidgets>
    </Container>
  );
};

export default Home;
