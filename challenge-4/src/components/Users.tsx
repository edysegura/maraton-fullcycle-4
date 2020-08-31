// @flow
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  first_name: string;
  last_name: string;
}

type Props = {

};

export const Users = (props: Props) => {
  const [ users, setUsers ] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then((response) => setUsers(response.data.data));
  }, []);

  return (
    <div>
      <h2>Users' List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.last_name}, {user.first_name}</li>
        ))}
      </ul>
    </div>
  );
};
