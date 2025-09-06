"use client";
import { useState } from "react";
import SignUpDesktop from "./desktop";

const SignUp = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden"></div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <SignUpDesktop
          signUpSuccess={signUpSuccess}
          onPressSubmit={() => setSignUpSuccess(true)}
        />
      </div>
    </>
  );
};

export default SignUp;
