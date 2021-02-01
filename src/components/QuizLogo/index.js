import styled from "styled-components";

import React from "react";
import PropTypes from "prop-types";

function Logo({ className, title, isExternal }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          borderRadius: "50%",
          padding: "20px",
          width: "200px",
        }}
      >
        {typeof isExternal !== "undefined" ? (
          <h2 style={{ textAlign: "center", color: "#000000" }}>{title}</h2>
        ) : (
          <img
            style={{ textAlign: "center" }}
            src="/svg/logo/logo.svg"
            width={135}
            height={67}
            alt="Modern Family Logo"
          />
        )}
      </div>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
