import { signIn } from "next-auth/react";
import React from "react";

function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };
  return (
    <div className="flex justify-center items-center border py-2 px-12 mt-5 rounded-xl ">
      <img className="w-8 h-8 mr-2" src="/google.svg" alt="" />
      <button
        className="text-[#000] mx-auto"
        onClick={handleClick}
      >
        Google Sign In
      </button>
    </div>
  );
}

export default GoogleSignInButton;
