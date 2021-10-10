import styled from "styled-components";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  margin: 1.25rem;
  padding: 1.25rem;
  -webkit-box-shadow: 2px 2px 6px 1px #949393;
  box-shadow: 2px 2px 6px 1px #949393;
`;

const ChartTitle = styled.h3`
  margin-bottom: 20px;
`;

const Charts = ({ title, data, dataKey, grid }) => {
  return (
    <Container>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Charts;
