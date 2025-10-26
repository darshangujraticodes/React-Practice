import React, { useState } from "react";
import { customFormApi } from "./customFormApi";

const CustomFormApi = () => {
  const [formData, setFormData] = useState(
    JSON.parse(JSON.stringify(customFormApi))
  );

  // Handle input changes
  const handleInputChange = (e, inputId) => {
    const { value } = e.target;

    const updatedForm = formData.map((item) => {
      if (item.id === inputId) {
        return { ...item, values: value };
      }

      if (item.type === "array") {
        const updatedFields = item.fields.map((field) =>
          field.id === inputId ? { ...field, values: value } : field
        );
        return { ...item, fields: updatedFields };
      }

      return item;
    });

    setFormData(updatedForm);
  };

  // Conditional rendering based on requiredIf
  const shouldRenderField = (field) => {
    if (field.requiredIf) {
      const dependency = formData.find(
        (item) => item.id === field.requiredIf.id
      );
      return dependency?.values === field.requiredIf.status;
    }
    return true;
  };

  // Pattern validation using field.errorMessage dynamically
  const isPatternInvalid = (field) => {
    if (field.regex && field.values) {
      const regex = new RegExp(field.regex);
      return {
        error: !regex.test(field.values),
        messg: field.errorMessage || "Invalid input",
      };
    }
    return { error: false, messg: "" };
  };

  // Recursive field renderer
  const renderInputField = (field, parentId = null) => {
    if (!shouldRenderField(field)) return null;

    const key = parentId ? `${parentId}-${field.id}` : field.id;
    const { error: invalid, messg: errorMessage } = isPatternInvalid(field);

    if (field.type === "text") {
      return (
        <div key={key}>
          <br />
          <label>{field.label} : </label>
          <input
            type="text"
            id={field.id}
            value={field.values || ""}
            onChange={(e) => handleInputChange(e, field.id)}
            placeholder={field.placeholder}
            required={field.required}
          />
          {invalid && (
            <span style={{ color: "red", paddingLeft: "15px" }}>
              {errorMessage}
            </span>
          )}
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <div key={key}>
          <br />
          <label>{field.label} : </label>
          <select
            value={field.values || ""}
            onChange={(e) => handleInputChange(e, field.id)}
            required={field.required}
          >
            <option hidden value="">
              {field.label}
            </option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (field.type === "array") {
      return field.fields.map((subField) =>
        renderInputField(subField, field.id)
      );
    }

    return null;
  };

  // Form submit with full validation
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    const validateFields = (fields) => {
      fields.forEach((field) => {
        if (isPatternInvalid(field).error) isValid = false;
        if (field.type === "array") validateFields(field.fields);
      });
    };

    validateFields(formData);

    if (!isValid) {
      alert("Please fix invalid fields before submitting.");
      return;
    }

    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h2>Custom Form API Component</h2>
      <form onSubmit={handleFormSubmit}>
        {formData.map((field) => renderInputField(field))}
        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>
        <h3>Form Data Preview:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default CustomFormApi;
