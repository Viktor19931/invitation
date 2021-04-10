import styled from "styled-components";

import { flexColumn, SectionTitle, MainSubtitle } from "../../styles/helpers";

export const SubTitle = styled(MainSubtitle)`
  margin: 0 0 20px;
`;

export const Title = styled(SectionTitle)`
  font-size: 61px;
  margin-bottom: 40px;
`;

const Wrapper = styled.section`
  ${flexColumn};
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1140px;
  align-items: center;
  background: #6ec1e400;
  justify-content: center;
`;

export default Wrapper;
