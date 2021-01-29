import React from "react";
import styled from "styled-components";
import db from "../../../db.json";

const OptionStyle = styled.div`
  input[type="radio"] {
    display: none;
  }
  label {
    padding: 1.5rem;
    display: inline-block;
    cursor: pointer;
    width: 100%;
    border-radius: 10px;
    font-weight: 600;
  }
  input[type="radio"]:checked + label {
    background: #006c80;
    box-shadow: 0 0 3px #006c80;
    color: #fff;
  }
`;

export default function OptionQuiz({ content, number, onChange }) {
  return (
    <OptionStyle>
      <input
        type="radio"
        id={content.toLowerCase()}
        name="optionQuiz"
        onChange={onChange}
        value={number}
      />
      <label htmlFor={content.toLowerCase()}>{content}</label>
    </OptionStyle>
  );
}
