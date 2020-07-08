import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import Friends from './components/Friends/Friends';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <Friends friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
