import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router";

function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const url = "http://localhost:5000/users";
  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url); //HTTP request for specific url , returns response object
    // console.log(response);
    response = await response.json();
    // console.log(response);
    //parsing JSON : .json is async method, reads the body of response and parses it as JSON
    // returns actual JS object
    /*
    When you run json-server --watch db.json --port 5000,
the endpoint /users itself returns an array of users ⬇️
setUserData(response.users);
    */

    setUserData(response);
    setLoading(false);
  };

  // console.log(userData)

  const deleteUser = async (id) => {
    // console.log("Deleted User :", id);
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });//sends HTTP DELETE request to API endpoint for the specific user 
    response = await response.json();
    if (response) {
      alert("Record deleted");
      getUserData();
    }
  };

  const editUser = (id) => {
    navigate("/edit/" + id);
    //this route change loads the UserEdit component (because of Route setup in App.jsx)
  };

  return (
    <div>
      {/* <h1>Integrate JSON server API and Loader</h1>
     <h1> Routes and Pages for User list and Add User UI </h1> */}
      <ul className="user-head user-list">
        <li>Name</li>
        <li>Email</li>
        <li>Age</li>
        <li>Actions</li>
      </ul>
      {!loading ? (
        userData &&
        userData.map((user) => (
          <ul key={user.name} className="user-list">
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.age}</li>
            <li>
              <button onClick={() => deleteUser(user.id)}>🗑️</button>

              <button onClick={() => editUser(user.id)}> ✏️</button>
            </li>
          </ul>
        ))
      ) : (
        <h3>Data Loading...</h3>
      )}
    </div>
  );
}

export default UserList;

/*
Parsing : converting data from one format into a format the JS engine can understand and execute.

*/
