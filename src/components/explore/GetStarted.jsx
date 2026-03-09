import React from "react";
import { NavLink } from "react-router-dom";

function GetStarted() {
  return (
    <div className="rounded-4xl p-4 text-white flex items-center bg-[#0052ff]">
      <div className="shrink-0 space-y-8">
        <div className="space-y-2">
          <h1 className="font-medium">Get started</h1>
          <p>Create your account today</p>
        </div>
        <div>
          <NavLink to={"/singup"}>
            <button className="btn-secondary text-base px-4 text-black">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
      <div className="w-full h-full">
        <img src="src/assets/explore/nuxPopularAssets-5.svg" />
      </div>
    </div>
  );
}

export default GetStarted;
