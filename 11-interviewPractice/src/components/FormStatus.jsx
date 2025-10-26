import React from "react";
import { useFormStatus } from "react-dom";

const FormStatus = () => {
  const handleFormSubmit = async (e) => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Form Submitted Successfully !");
      }, 5000);
    });

    // console.log("Form Submitted Successfully ! ");
  };

  const CustomForm = () => {
    const { pending } = useFormStatus();

    console.log("Pending State", pending);

    return (
      <>
        <input type="text" placeholder="Enter username" /> <br />
        <br />
        <input type="password" placeholder="Enter Password" /> <br /> <br />
        <button disabled={pending}>
          {pending ? "Submitting .." : "Submit"}
        </button>
      </>
    );
  };

  return (
    <>
      <div>
        <h2>useFormStatus() Hook </h2>
        <form action={handleFormSubmit}>
          <CustomForm />
        </form>
      </div>
    </>
  );
};

export default FormStatus;
