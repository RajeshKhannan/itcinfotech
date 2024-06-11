import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MessagesContext } from '../App';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedUser } = useContext(MessagesContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const usersWithDp = response.data.map(user => ({
          ...user,
          userDp: `https://i.pravatar.cc/150?img=${user.id}`
        }));
        setUsers(usersWithDp);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedUser(user)}
          >
            <img src={user.userDp} alt={`${user.name} DP`} style={{ width: '50px', height: '50px' }} />
            <div>
              <div><strong>{user.name}</strong></div>
              <div>{user.email}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
