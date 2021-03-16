import React from "react";
import "../index.scss";

function Button({ children, type, callBack, isDisabled, number, styles }) {
  if (type === "img") {
    return (
      <a
        className={`primary-btn ${styles}`}
        href={`tel:${number}`}
        disabled={isDisabled}
      >
        <div>{children}</div>
      </a>
    );
  }
  return (
    <button
      className={`primary-btn ${styles}`}
      disabled={isDisabled}
      onClick={(e) => {
        callBack(e);
        e.preventDefault();
      }}
    >
      <div>{children}</div>
    </button>
  );
}

export default Button;
