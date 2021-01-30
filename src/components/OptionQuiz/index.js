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
    background: ${db.theme.colors.primary};
    box-shadow: 0 0 3px ${db.theme.colors.primary};
    color: #fff;
  }
`;

export default function OptionQuiz({ content, number, onChange }) {
  return (
    <OptionStyle>
      <input
        type="radio"
        id={`test__${number}`}
        name="optionQuiz"
        onChange={onChange}
        value={number}
      />
      <label htmlFor={`test__${number}`}>{content}</label>
    </OptionStyle>
  );
}
