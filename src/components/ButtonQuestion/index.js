import styled from "styled-components";

const ButtonQuestion = styled.button`
  width: 100%;
  height: 35px;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 3px #006c80;
  background-color: #006c80;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;

ButtonQuestion.Reset = styled.button`
  isplay: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 3px #006c80;
  background-color: #006c80;
  font-weight: 600;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;

export default ButtonQuestion;
