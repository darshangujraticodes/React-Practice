import React from "react";

function SelectInputField({
  label,
  id,
  name,
  value,
  onChangeFunction,
  optionArray,
  defaultOption,
  error,
  className,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label> <br />
      <select
        name={name}
        className={className}
        id={id}
        value={value}
        onChange={onChangeFunction}
      >
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}

        {optionArray?.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <p className="errorText">{error}</p>
    </div>
  );
}

export default SelectInputField;
