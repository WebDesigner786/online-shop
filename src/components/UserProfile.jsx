// src/components/UserProfile.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail } from '../redux/slices/userSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <input
        type="email"
        value={user.email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
