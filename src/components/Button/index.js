import React from "react";
import styled from "styled-components";
import db from "../../../db.json";

const ButtonStyle = styled.button`
  background-color: ${db.theme.colors.primary};
  font-weight: 600;
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  margin-top: 10px;
  border-color: transparent;
  color: #ffffff;
  cursor: pointer;
  &:disabled {
    background-color: ${db.theme.colors.secondary};
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
