import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
      fetchUsers();
    }, []);
    const fetchUsers = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          console.log(response.data)
          setListOfUsers(response.data);
        } catch (error) {
          console.error('Error fetching the users', error);
        }
      };
    return (
      <div className="user">
        <h1>User List</h1>
        <ul>
          {listOfUsers.map(res => (
            <li key={res.id}>
          <strong> name: </strong>   {res.name} -  <strong> email: </strong>    {res.email}  - <strong> phone : </strong>    {res.phone} <strong> city : </strong> {res.address.city}
            </li>
          ))}
        </ul>
      </div>
    );
  };