import React, { useActionState } from "react";

function Soln2() {
  const handlelogin = (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z)-9]+$/i;

    if (!name || name.length < 5) {
      return { error: "name is should not empty or less than 5 chars" };
    } else if (!regex.test(password)) {
      return { error: "password contains ony nums and alphabets" };
    } else {
      return { message: "Login sucess" };
    }
  };
  const [data, action, pending] = useActionState(handlelogin);

  return (
    <div>
      <h1>Validation with useAction in REACT JS</h1>
      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          name="name"
          placeholder="enter name"
        />

        <br />
        <br />
        <input
          defaultValue={data?.password}
          type="text"
          name="password"
          placeholder="enter password"
        />
        <br />
        <br />
        <button disabled={pending}>login</button>
        {data?.message && (
          <span style={{ color: "green" }}>{data.message}</span>
        )}
        {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
      </form>
    </div>
  );
}

export default Soln2;
