import React from "react";
import { useState } from "react";

function Soln1() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [nameErr, setNameErr] = useState();
  const [passErr, setPassErr] = useState();
  const handleName = (e) => {
    // console.log(e.target.value);
    if (e.target.value.length > 5) {
      setNameErr("Err: max 5 characters allowed");
    } else {
      setNameErr("");
    }
  };

  const handlePassword = (e) => {
    // console.log(e.target.value);   // this prints the typed value
    let regex = /^[A-Z0-9&*]+$/i; // regex allows only alphabets + numbers
    if (regex.test(e.target.value)) {
      setPassErr(); // ✅ input matches -> clear error
    } else {
      setPassErr("Err:Only num and alphabets allowed"); // ❌ input invalid
    }
  };
  return (
    <div>
      {" "}
      <h3>Login Page</h3>
      <input
        className={nameErr ? "error" : ""}
        type="text"
        onChange={handleName}
        placeholder="enter name"
      />
      {"  "}
      {nameErr && <span className="errRed">{nameErr}</span>}
      {/* First nameErr is the condition.
     Second nameErr is the value to display if the first one is true. */}
      <br />
      <br />
      <input
        className={passErr ? "error" : ""}
        type="text"
        onChange={handlePassword}
        placeholder="enter password"
      />
      {"  "}
      {passErr && <span className="errRed">{passErr}</span>}
      <br />
      <br />
      <button disabled={nameErr || passErr}>Login</button>
    </div>
  );
}

export default Soln1;
