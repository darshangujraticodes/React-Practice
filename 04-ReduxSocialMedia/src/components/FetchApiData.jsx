import React, { useEffect, useState } from "react";

function FetchApiData() {
  // url =   https://jsonplaceholder.typicode.com/users

  /* comment start


  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const jsonPlaceHolderUserUrl = "https://jsonplaceholder.typicode.com/users";
  const githubUserUrl = "https://api.github.com/users";

  useEffect(() => {
    const fethApiData = async () => {
      try {
        setLoading(false);
        const response = await fetch(jsonPlaceHolderUserUrl);
        const jsonData = await response.json();

        console.log("fetchAPI data = ", jsonData);

        setApiData(jsonData);
      } catch (e) {
        console.log(e);
        setError("Error Occured !");
      } finally {
        console.log(
          "Finally always get executed after executing try or catch block "
        );
      }
    };

    fethApiData();

    console.log(apiData);
  }, []);


    comment End   */

  return (
    <>
      <div className="fethApiSection mt-4">
        <div className="container">
          <div>
            <h2 className="text-center d-none"> Loading Api Data ...</h2>
          </div>

          <div className="d-flex justify-content-center">
            <table className="d-none">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default FetchApiData;
