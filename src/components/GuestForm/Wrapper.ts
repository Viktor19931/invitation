import styled from "styled-components";

export const Content = styled.div`
  margin: auto;
  max-width: 683px;
  justify-content: center;
  span,
  h3 {
    display: block;
    text-align: center;
  }
  h3 {
    margin: 10px 0;
  }
`;

export const FormWrapper = styled.form`
  margin: auto;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  background-color: #ffffff94;
  padding: 80px 80px 80px 80px;
  box-shadow: 0px 0px 44px -14px rgb(0 0 0 / 50%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  input,
  textarea {
    width: 100%;
    font-size: 17px;
    min-height: 40px;
    font-weight: 400;
    padding: 8px 16px;
    border-radius: 3px;
    margin-bottom: 36px;
    box-sizing: border-box;
    border: 1px solid #7a7a7a;
  }
  textarea {
    resize: none;
    height: 150px;
  }
`;

export const Control = styled.div`
  position: relative;
  span {
    top: 9px;
    right: 6px;
    color: red;
    z-index: 5;
    font-size: 12px;
    position: absolute;
  }
`;

export const SubmitButton = styled.button`
  color: #fff;
  height: 60px;
  border: none;
  font-size: 17px;
  border-radius: 5px;
  background-color: #676483;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  background: linear-gradient(
      rgba(235, 233, 244, 0.5),
      rgba(235, 233, 244, 0.5)
    ),
    url(https://templatekit.hellokuro.com/kunikaa/wp-content/uploads/2020/10/bg-header-3-wedding-couple-at-destination-wedding-ceremony-BKX4KXJ.jpg);
`;

export default Wrapper;
