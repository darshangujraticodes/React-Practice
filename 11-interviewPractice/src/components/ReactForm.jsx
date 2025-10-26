import React, { useState } from "react";

const ReactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    city: "",
  });

  // 🔹 Handles text, email, password, and radio inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // handle multiple checkbox values
      setFormData((prev) => {
        if (checked) {
          // add hobby
          return { ...prev, hobbies: [...prev.hobbies, value] };
        } else {
          // remove hobby
          return {
            ...prev,
            hobbies: prev.hobbies.filter((hobby) => hobby !== value),
          };
        }
      });
    } else {
      // for text/email/password/radio
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Form Submitted:", formData);
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      hobbies: [],
      city,
    });
  };

  const hobbyOptions = [
    "painting",
    "exploring",
    "singing",
    "playing cricket",
    "acting",
    "dancing",
  ];

  const citiesOption = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"];

  return (
    <>
      <h2>Controlled Form with Multi-Select & Radio Buttons</h2>

      <form onSubmit={handleSubmit}>
        {/* 🧍 Basic Inputs */}
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          type="text"
        />
        <br /> <br />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
        />
        <br /> <br />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
        />
        <br /> <br />
        {/* 🚹 Gender Radio Buttons */}
        <label>Gender:</label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />{" "}
          Other
        </label>
        <br /> <br />
        {/* 🎨 Hobbies Checkbox Group */}
        <label>Hobbies:</label>
        <br />
        {hobbyOptions.map((hobby, index) => (
          <label key={hobby} style={{ display: "block" }}>
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              key={hobby}
              checked={formData.hobbies.includes(hobby)}
              onChange={handleChange}
            />{" "}
            {hobby}
          </label>
        ))}
        <br /> <br />
        <select name="city" onChange={handleChange} id="">
          <option hidden value="">
            Select City
          </option>
          {citiesOption.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <br />
      <button onClick={handleClear}>Clear</button>

      {/* 🔍 Preview the Data */}
      <div style={{ marginTop: "20px" }}>
        <h3>Form Data Preview:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </>
  );
};

export default ReactForm;
