import React, { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};

const reducer = (data, action) => {
  return {
    ...data, // keep previous state
    [action.type]: action.val, // update only the changed field
  };
};

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, emptyData);

  return (
    <div>
      <h1>useReducer</h1>

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "name" })
        }
        type="text"
        placeholder="enter name"
      />
      <br />
      <br />

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "password" })
        }
        type="password"
        placeholder="enter password"
      />
      <br />
      <br />

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "email" })
        }
        type="email"
        placeholder="enter email"
      />
      <br />
      <br />

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "city" })
        }
        type="text"
        placeholder="enter city"
      />
      <br />
      <br />

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "address" })
        }
        type="text"
        placeholder="enter address"
      />
      <br />
      <br />

      <ul>
        <li>
          <b>Name:</b> {state.name}
        </li>
        <li>
          <b>Password:</b> {state.password}
        </li>
        <li>
          <b>Email:</b> {state.email}
        </li>
        <li>
          <b>City:</b> {state.city}
        </li>
        <li>
          <b>Address:</b> {state.address}
        </li>
      </ul>

      <button onClick={() => console.log(state)}>Add Details</button>
    </div>
  );
}

export default UseReducerHook;
