import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <Link to={`/users/${user.id}`} key={user.id}>
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              username={user.username}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
