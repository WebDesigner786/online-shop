// src/redux/slices/userSlice.test.js
import userReducer, { setName, setEmail } from './userSlice';

describe('user reducer', () => {
  const initialState = {
    name: '',
    email: '',
  };

  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setName', () => {
    const actual = userReducer(initialState, setName('John Doe'));
    expect(actual.name).toEqual('John Doe');
  });

  it('should handle setEmail', () => {
    const actual = userReducer(initialState, setEmail('john@example.com'));
    expect(actual.email).toEqual('john@example.com');
  });
});
