import styled from "styled-components";

export const SubTitle = styled.h2`
  color: #7a7a7a;
  font-size: 15px;
  font-weight: 400;
  margin: 0 0 20px;
  letter-spacing: 6.2px;
  font-family: "Roboto", Sans-serif;
`;

export const Title = styled.h2`
  margin: 0;
  color: #676483;
  font-size: 61px;
  font-weight: 400;
  margin-bottom: 40px;
  letter-spacing: -0.3px;
  font-family: "Times New Roman", Sans-serif;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1140px;
  align-items: center;
  background: #6ec1e400;
  flex-direction: column;
  justify-content: center;
`;

export default Wrapper;
