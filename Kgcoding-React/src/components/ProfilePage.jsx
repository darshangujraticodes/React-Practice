import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function ProfilePage() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="section">
        <div className="container">
          <h3 className="text-center text-white">Context API Value Display</h3>
          {!user ? (
            <p>Please login !</p>
          ) : (
            <p>
              Hi , {user.username} Darshan Here, Full Stack Developer and
              Youtuber Welcome you to CS Techtube Channel
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
