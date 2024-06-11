import React, { useContext } from 'react';
import { MessagesContext } from '../App';

function MessageTable() {
  const { messages, selectedUser } = useContext(MessagesContext);

  const userMessages = selectedUser
    ? messages.filter(message => message.userId === selectedUser.id)
    : [];

  return (
    <div>
      <h3>Messages</h3>
      {selectedUser ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {userMessages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.id}</td>
                <td>{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Please select a user to view messages.</div>
      )}
    </div>
  );
}

export default MessageTable;
