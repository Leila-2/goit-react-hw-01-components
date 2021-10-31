import './App.css';
import User from './components/User/User';
import user from './data/user.json';
import StatSection from './components/Statistics/StatisticSection';
import FriendsList from './components/Friends/FriendList';
import statData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionSection from './components/Transactions/TransactionSection';

function App() {
  return (
    <div className="App">
      <User
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        veiws={user.stats.views}
        likes={user.stats.likes}
      />
      <StatSection items={statData} />
      <FriendsList items={friendsData} />
      <TransactionSection items={transactions} />
    </div>
  );
}

export default App;
