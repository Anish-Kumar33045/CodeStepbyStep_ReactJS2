import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const { id } = useParams();
  const url = "http://localhost:5000/users/" + id;

  const navigate = useNavigate(); //used to com back to home page

  // console.log(id)
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setName(response.name);
    setEmail(response.email);
    setAge(response.age);
  };

  const updateUserData = async () => {
    let response = await fetch(url, {
      method: "Put",
      body: JSON.stringify({ name, age, email }),
    });

    response = await response.json();

    console.log(response);
    if (response) {
      alert("Update success");
      navigate("/"); //navigating to home page
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Edit the Record</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <br />
      <br />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter age"
      />
      <br />
      <br />
      <button onClick={updateUserData}>Update user</button>
    </div>
  );
}

export default UserEdit;
