import React from "react";

function SecondsCounter(props) {
  return (
    <div className="seconds-counter" role="timer" aria-live="polite">
      <i className="fa-solid fa-clock"></i>
      {props.seconds} seconds
    </div>
  );
}

export default SecondsCounter;