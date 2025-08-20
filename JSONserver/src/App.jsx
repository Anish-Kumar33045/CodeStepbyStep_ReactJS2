import "./App.css";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import { NavLink, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <ul className="nav-list">
        <li>
          <NavLink to="/" end>
            List
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
}

/*
🔑 Key Notes

Added end to <NavLink to="/" end> → ensures Home link isn’t always active.

Each link has its own <li>, preventing React re-render flicker.

Make sure <App /> is wrapped in <BrowserRouter> in main.jsx (outside App, not inside).
*/
