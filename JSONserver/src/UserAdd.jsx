import React, { useState } from "react";

export default function UserAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const createUser = async () => {
    console.log("User Created : ", { name, age, email });
    const url = "http://localhost:5000/users";

    let response = await fetch(url, {
      method: "Post",
      body: JSON.stringify({ name, email, age }),
    });
    response = await response.json();

    if (response) {
      alert("new user added");
    }
    //reset

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Add New User</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
      />
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter email"
      />
      <br />
      <br />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="enter age"
      />
      <br />
      <br />
      <button onClick={createUser}>Add User</button>
    </div>
  );
}
