import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;
  width: 1000px;
  border-radius: 20px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 18px;
  }
`;
export const ButtonWrapper = styled.div`
  transition: all 0.5s ease-in-out;

  :hover {
    opacity: 0.6;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 16px;
    width: 100%;
    height: 40px;
    margin: 5px;
`;
