import './App.css';
import User from './components/User';
import user from './data/user.json';
import StatSection from './components/StatisticSection';
//import Statistics from "./components/Statistics"
import statData from './data/statistical-data.json';

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
    </div>
  );
}

export default App;
