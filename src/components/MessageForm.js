import React, { useState, useContext } from 'react';
import { MessagesContext } from '../App';

function MessageForm() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { addMessage, selectedUser } = useContext(MessagesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') {
      setError('Message cannot be empty');
    } else if (!selectedUser) {
      setError('Please select a user to send the message');
    } else {
      addMessage(selectedUser.id, message);
      setMessage('');
      setError('');
    }
  };

  return (
    <div>
      {selectedUser && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={selectedUser.userDp} alt={`${selectedUser.name} DP`} style={{ borderRadius: '50%', marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <div><strong>{selectedUser.name}</strong></div>
            <div>{selectedUser.email}</div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Message: </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ padding: '8px', width: 'calc(100% - 16px)' }}
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Send
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
