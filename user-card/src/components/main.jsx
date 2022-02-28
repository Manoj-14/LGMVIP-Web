import "./main.css";
import React, { useState } from "react";
// import app from "../App";

export default function Navbar() {
  const [users, setUsers] = useState([]);

  // var users = [];
  const loadUser = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1 ");
    const jsonRes = await response.json();
    setUsers(jsonRes.data);

    const main = document.querySelector(".nav");
    const heading = document.querySelector(".nav h2");
    const btn = document.querySelector(".nav button");

    main.style.height = "50px";
    main.style.flexDirection = "row";
    main.style.justifyContent = "space-around";
    heading.style.fontSize = "2rem";
    btn.style.fontSize = "1rem";
  };
  return (
    <div className="main">
      <div className="nav">
        <h2>User cards</h2>
        <button id="fetchBtn" onClick={loadUser}>
          Fetch Users
        </button>
      </div>
      <div className="users">
        {users.map((user) => {
          return (
            <div className="user-info" key={user.id}>
              <img className="avatar" src={user.avatar} alt={user.first_name} />
              <h3 className="name">
                Name :{user.first_name} {user.last_name}
              </h3>
              <h5 className="email">Email :{user.email}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
