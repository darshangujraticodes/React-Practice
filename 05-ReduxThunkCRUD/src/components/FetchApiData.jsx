import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../features/thunk/thunkSlice";
import ProfileCard from "./ProfileCard";
import { fetchSingleUserData } from "../features/thunk/singleUserInfoSlice";
import UserInfo from "./UserInfo";

function FetchApiData() {
  const dispatch = useDispatch();

  const { apiData, error, loading } = useSelector(
    (state) => state.thunkStoreReducer
  );

  console.log(apiData, error, loading);

  return (
    <>
      <section className="">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div>
              <h1 className="text-center">Fetch Api Data</h1>
              <div className="d-flex justify-content-center mt-4">
                <button
                  onClick={() => dispatch(fetchApiData())}
                  type="button"
                  className="btn btn-dark"
                >
                  Fetch Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {error ? (
        <div className="mt-5">
          <h4 className="text-center">{error} </h4>
        </div>
      ) : null}

      {loading === true ? (
        <div className="mt-5">
          <h4 className="text-center">Loading Github User Data ... </h4>
        </div>
      ) : (
        <section className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  {apiData?.map((item) => (
                    <div key={item.id} className="col-md-3">
                      <ProfileCard
                        onClick={() => dispatch(fetchSingleUserData(item.url))}
                        profileImg={item.avatar_url}
                        profileName={item.login}
                        profileUrl={item.url}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-3">
                <h2 className="text-center">User Details</h2>
                <UserInfo />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default FetchApiData;
