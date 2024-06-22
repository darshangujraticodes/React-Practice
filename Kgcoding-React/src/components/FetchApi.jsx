import React, { useEffect, useState } from "react";

function FetchApi() {
  let API_URL = "https://jsonplaceholder.typicode.com/users";

  const [userData, setUserData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserApiData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        // console.log(response);
        const jsonData = await response.json();
        // console.log(jsonData, typeof jsonData);
        setUserData(jsonData);
      } catch (error) {
        console.log(error);
        setError("Unable to Fetch Data !");
      } finally {
        setLoading(false);
      }
    };

    fetchUserApiData();
    console.log("API DATA =", userData);
    // console.log("API Error =", error);
  }, []);

  return (
    <>
      <section className="fetchApiSection py-5">
        <div className="container">
          <h2 className="text-white">
            <table>
              <thead>
                <tr>
                  <th width="100px">ID</th>
                  <th width="100px">Name</th>
                  <th width="250px">Username</th>
                  <th width="100px">Email</th>
                  <th width="100px">City</th>
                </tr>
              </thead>

              <tbody>
                {userData ? (
                  userData.map((val) => (
                    <tr key={val.id}>
                      <td key={val.id}>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.username}</td>
                      <td>{val.email}</td>
                      <td>{val.address.city}</td>
                    </tr>
                  ))
                ) : (
                  <p> Unable to Fetch </p>
                )}
              </tbody>
            </table>
          </h2>
        </div>
      </section>
    </>
  );
}

export default FetchApi;
