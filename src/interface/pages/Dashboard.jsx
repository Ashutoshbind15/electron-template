import React, { useEffect, useState } from "react";
import { getUsers } from "../../dataaccess/queries/users/index.js";
import { createRandomUser } from "../../dataaccess/mutations/users/index.js";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    fetchData();
  });

  return (
    <>
      <div>Dashboard</div>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <button
        onClick={async () => {
          const randomUser = await createRandomUser();
          setUsers([...users, randomUser]);
        }}
      >
        Click me to create a random user
      </button>
    </>
  );
};

export default Dashboard;
