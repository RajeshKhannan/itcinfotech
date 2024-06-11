import React, { useState } from 'react';
import MessageTable from './components/MessageTable';
import MessageForm from './components/MessageForm';
import UserList from './components/UserList';

export const MessagesContext = React.createContext();

const initialMessages = [
  { id: 1, userId: 1, message: "This is a user message" },
  { id: 2, userId: 2, message: "Another message" }
];

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedUser, setSelectedUser] = useState(null);

  const addMessage = (userId, newMessage) => {
    setMessages([...messages, { id: messages.length + 1, userId, message: newMessage }]);
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage, selectedUser, setSelectedUser }}>
      <div style={{ display: 'flex', padding: '20px' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <UserList />
        </div>
        <div style={{ flex: 2 }}>
          <MessageForm />
          <MessageTable />
        </div>
      </div>
    </MessagesContext.Provider>
  );
}

export default App;
