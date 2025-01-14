import React from "react";

function InputTextBox({
  label,
  name,
  placeholder,
  id,
  errorValue,
  value,
  onChangeFunction,
  className,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label> <br />
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChangeFunction}
      />
      <p className="errorText">{errorValue}</p>
    </div>
  );
}

export default InputTextBox;
