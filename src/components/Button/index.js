import React from "react";
import styled from "styled-components";
import db from "../../../db.json";

const ButtonStyle = styled.button`
  background-color: ${db.theme.colors.success};
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 0 1em #00000024;
  border-color: transparent;
  color: #ffffff;
`;

export default function Button({ content }) {
  return <ButtonStyle>{content}</ButtonStyle>;
}
