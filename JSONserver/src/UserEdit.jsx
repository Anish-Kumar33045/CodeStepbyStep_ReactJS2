import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const { id } = useParams(); //extracts userid from url path
  const url = "http://localhost:5000/users/" + id;

  const navigate = useNavigate(); //used to come back to home page

  // console.log(id)
  useEffect(() => {
    getUserData();
  }, []);

  // purpose of getUserData below
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
      method: "Put", // HTTP put request to Api ,used to replace existing data with new data.
      body: JSON.stringify({ name, age, email }),
    });

    response = await response.json();

    console.log("Called in updateUserData", response);
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

/*
Purpose of getUserdata function :
this fn fetches the existing user data from the server by the given userId and populates the form field with that data


when we run npm run server 
  => starts REST API server 
  => Uses the json data inside db.json as its database
  => Each resource in db.json corresponds to API end point

  How they are LINKED ?
  => Your react app communicates via HTTP requets (fetch) with json-server API endpoints
  => json-server map those endpoints (/users,/users/:id) directly to corresponding parts of db.json file
  => Any changes made through API calls updates the db.json file in disk in real time
  => so< React add,edit,delete, functions indirectly modify db.json via these REST api calls provided by json-server
*/
