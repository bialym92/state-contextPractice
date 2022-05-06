import React from 'react';
import { UserContext } from './App';

const User = () => {

  const value = React.useContext(UserContext);
  return (
   <h1>{value}</h1>
  );
}

export default User;