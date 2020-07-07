import React from 'react';
import Profile from './components/Profile/Profile';
import {
  name,
  tag,
  location,
  avatar,
  stats,
} from './components/Profile/user.json';

const App = () => {
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </>
  );
};

export default App;
