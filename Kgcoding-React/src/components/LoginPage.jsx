import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    console.log("user context api set = ", user.username);
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row-12">
            <h2 className="text-center text-white">Contaxt API Test</h2>
            <div className="inputWrapper d-flex justify-content-center">
              <input
                type="text"
                className="mt-3 mx-3 px-3 py-2"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                className="mt-3 mx-3 px-3 py-2"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleSubmit} className="mx-3 mt-3 py-2 px-3 ">
                Submit
              </button>
            </div>
            <div className="textWrapper">
              {/* <p className="text-center text-white mt-3">
                Hi , {username} is Back with Full Stack Developer Skills
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
