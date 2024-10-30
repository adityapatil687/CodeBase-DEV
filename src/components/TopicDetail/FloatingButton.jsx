import React from "react";

function FloatingButton({ toggleOffCanvas }) {
  return (
    <button
      className="btn floating-btn rounded-circle"
      onClick={toggleOffCanvas}
    >
      <i className="bi bi-list-task"></i>
    </button>
  );
}

export default FloatingButton;
