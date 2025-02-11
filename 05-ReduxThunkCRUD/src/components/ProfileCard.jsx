import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchSingleUserData,
  singleUserSlice,
} from "../features/thunk/singleUserInfoSlice";

function ProfileCard({
  profileImg,
  profileName,
  profileFollowerCount,
  profileRepos,
  profileUrl,
}) {
  const dispatch = useDispatch();

  return (
    <>
      {/* <Link to={`/user/${profileName}`}> */}
      <div className="profileCardWrap">
        <div className="profileImgWrap">
          <img src={profileImg} className="profileImg " alt={profileName} />
        </div>
        <div className="profileContent  mt-3">
          <h3 className="link-underline-light underlineNone text-center">
            {profileName}
          </h3>
          <p className="d-none">
            <span className="me-2">
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Followers : {profileFollowerCount}</span>
          </p>

          <p className="d-none">
            <span className="me-2">
              <i className="fa-regular fa-folder-open"></i>
            </span>
            <span className="underlineNone">Public Repos : {profileRepos}</span>
          </p>

          <div className="d-flex justify-content-center">
            <button
              onClick={() => dispatch(fetchSingleUserData(profileUrl))}
              className="btn btn-dark"
            >
              Know more
            </button>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
}

export default ProfileCard;
