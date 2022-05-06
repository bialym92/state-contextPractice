import React from 'react';
import Counter from './Counter';
import User from './User';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value="Reed">
      <User />
      <Counter />
    </UserContext.Provider>
  )
}

