import React from "react";

export default function Form({ data, onLimitChange, onShuffle }) {
  const {limit,isCalculating} = data;

  const handleInputChange = (event) => {
    const inputText = Number(event.target.value);
    onLimitChange(inputText);
  };

  const { formStyle, inputStyle } = styles;

  return (
    <div style={formStyle}>
      <div className="input-field">
        <input
          style={inputStyle}
          min="1"
          step="1"
          max="100"
          id="inputLimit"
          type="number"
          value={limit}
          onChange={handleInputChange}
          disabled={isCalculating}
        />
        <label htmlFor="inputLimit" className="active">
          Quantidade de sorteios:
        </label>
        <button className="waves-effect waves-light btn" onClick={onShuffle} disabled={isCalculating}>
          Sortear
        </button>
      </div>
    </div>
  );
}

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  inputStyle: {
    width: "300px",
    marginRight: "20px",
  },
};
