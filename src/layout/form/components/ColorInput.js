import React, { useState } from "react";
import { GithubPicker } from "react-color";

const colors = [
  "#B80000",
  "#DB3E00",
  "#FCCB00",
  "#008B02",
  "#006B76",
  "#1273DE",
  "#004DCF",
  "#5300EB",
  "#EB9694",
  "#FAD0C3",
  "#FEF3BD",
  "#C1E1C5",
  "#BEDADC",
  "#C4DEF6",
];

export default function ColorInput({ inputValue, handleChange, title }) {
  const [active, setActive] = useState(false);
  const handleClickPanel = () => {
    setActive(!active);
  };

  return (
    <div className="mt-3">
      <label htmlFor="avatar-input">{title}</label>
      <div id="color-input" className="mt-3" onClick={handleClickPanel}>
        <div
          className="color-input-panel mb-3"
          style={{ backgroundColor: inputValue }}
        ></div>
        {active && (
          <GithubPicker
            color={inputValue}
            colors={colors}
            onChangeComplete={(color) => handleChange("color", color.hex)}
          />
        )}
      </div>
    </div>
  );
}
