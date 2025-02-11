import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleUserData } from "../features/thunk/singleUserInfoSlice";

function UserInfo() {
  const { userInfo, loading, error, githubUserUrl } = useSelector(
    (state) => state.userStoreReducer
  );
  // const { name } = useParams();

  const dispatch = useDispatch();

  // console.log("Name = ", name);

  // console.log(userInfo, loading, error, githubUserUrl);

  if (userInfo.length === 0) {
    return (
      <>
        <div className="">
          <p className="text-center">Select User to View Details</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        onClick={() => dispatch(fetchSingleUserData(userURL))}
        className="profileCardWrap"
      >
        <div className="profileImgWrap">
          <img
            src={userInfo.avatar_url}
            className="profileImg "
            alt={userInfo.name}
          />
        </div>
        <div className="profileContent  mt-3">
          <h3 className="link-underline-light underlineNone text-center">
            {userInfo.name}
          </h3>
          <p>Username : {userInfo.login}</p>
          <p className="">
            <span className="me-2">
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Followers : {userInfo.followers}</span>
          </p>

          <p className="">
            <span className="me-2">
              <i className="fa-regular fa-folder-open"></i>
            </span>
            <span className="underlineNone">
              Public Repos : {userInfo.public_repos}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
