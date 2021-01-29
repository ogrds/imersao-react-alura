import React from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 2rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #000000;
  border-radius: 5px;
`;

export default function InputText({ placeholder, onChange }) {
  return <Input onChange={onChange} type="text" placeholder={placeholder} />;
}
