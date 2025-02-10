import React from "react";
import FetchApiData from "./FetchApiData";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../features/reduxtoolkitApi/toolkitApiSlice";

function RtkApiCall() {
  const reduxUserApiData = useSelector(
    (state) => state.toolkitStoreReducer.users
  );

  const { loading, error, users } = useSelector(
    (state) => state.toolkitStoreReducer
  );

  console.log(loading, error, users);

  const dispatch = useDispatch();

  //   console.log(reduxUserApiData);

  if (loading === true) {
    return (
      <>
        <div>
          <h2 className="text-center mt-5"> Loading Api Data ...</h2>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>
          <h2 className="text-center mt-5"> {error}</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="apiCallSection mt-4">
        <div className="container">
          <div className="headWrap">
            <h1 className="text-center">Redux Toolkit Api Call</h1>
          </div>
          <div>
            {/* <FetchApiData /> */}

            <div className="btnWrap d-flex justify-content-center mt-4">
              <button
                onClick={() => dispatch(getAllData())}
                className="ripple ripple-surface btn btn-primary "
              >
                Fetch User Data
              </button>
            </div>

            <div className="fethApiSection mt-4">
              <div className="container">
                <div className="d-flex justify-content-center">
                  <table className="">
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
                    <tbody>
                      {reduxUserApiData.length > 0 ? (
                        reduxUserApiData?.map((item) => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                          </tr>
                        ))
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RtkApiCall;
