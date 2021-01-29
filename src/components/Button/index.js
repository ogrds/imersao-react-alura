import React from "react";
import styled from "styled-components";
import db from "../../../db.json";

const ButtonStyle = styled.button`
  background-color: #006c80;
  font-weight: 600;
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 0 1em #00000024;
  border-color: transparent;
  color: #ffffff;
  cursor: pointer;
  &:disabled {
    background-color: #699fa9;
    cursor: not-allowed;
  }
`;

export default function Button({ content, type, disabled }) {
  return (
    <ButtonStyle type={type} disabled={disabled}>
      {content}
    </ButtonStyle>
  );
}
