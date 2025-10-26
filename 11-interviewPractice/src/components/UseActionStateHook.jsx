import React, { useActionState, useState } from "react";

const UseActionStateHook = () => {
  const formInititalState = {
    name: "",
    email: "",
    password: "",
    city: "",
    gender: "",
    hobbies: "",
  };
  const [formData, setFormData] = useState(formInititalState);

  const initialState = {
    message: "",
  };

  const handleFormSubmit = async (prevState, formDataObj) => {
    const name = formDataObj.get("name");
    const email = formDataObj.get("email");
    const password = formDataObj.get("password");
    const city = formDataObj.get("city");
    const gender = formDataObj.get("gender");
    const hobbies = formDataObj.getAll("hobbies"); // getAll → returns array of selected checkboxes

    // simulate async
    await new Promise((res) => setTimeout(res, 3000));

    if (!name || !email || !password || !city) {
      return { message: "❌ Please fill in all fields." };
    }

    console.log("✅ Form submitted successfully:", {
      name,
      email,
      password,
      city,
      gender,
      hobbies,
    });

    setFormData({
      name,
      email,
      password,
      city,
      gender,
      hobbies,
    });

    return { message: `✅ Form submitted for ${name} from ${city}` };
  };

  const [state, formAction, isPending] = useActionState(
    handleFormSubmit,
    initialState
  );

  const cityOption = ["Mumbai", "Pune", "Delhi", "Banglore", "Hyderabad"];

  const hobbyOptions = [
    "Painting",
    "Exploring",
    "Singing",
    "Playing Cricket",
    "Acting",
    "Dancing",
  ];
  const genderOptions = ["Male", "Female", "Other"];

  return (
    <>
      <h2>useActionState Form Hooks</h2>

      <div>
        <form action={formAction}>
          <div>
            <input type="text" placeholder="username" name="name" />
          </div>
          <br />
          <div>
            <input type="email" placeholder="email" name="email" />
          </div>
          <br />
          <div>
            <input type="password" placeholder="password" name="password" />
          </div>
          <br />
          <div>
            <select name="city" id="">
              <option hidden value="">
                Select Your City
              </option>
              {cityOption.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <br />

          <div>
            <label htmlFor="">Gender </label>
            <br />
            {genderOptions.map((g, index) => (
              <label key={index} style={{ marginRight: "10px" }}>
                <input type="radio" name="gender" value={g} /> {g}
              </label>
            ))}
          </div>

          <br />

          <div>
            <label>Hobbies:</label>
            <br />
            {hobbyOptions.map((hobby, index) => (
              <label key={index} style={{ display: "block" }}>
                <input type="checkbox" name="hobbies" value={hobby} /> {hobby}
              </label>
            ))}
          </div>

          <br />
          <div>
            <button disabled={isPending}>
              {isPending ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <div>
        {/* 💬 feedback message */}
        {state.message && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            {state.message}
          </p>
        )}
      </div>

      <div>
        <pre>
          <h3>Form Data Preview:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </pre>
      </div>
    </>
  );
};

export default UseActionStateHook;
