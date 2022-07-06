import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendlist/FriendList";
import TransactionHistory from "./transactions/TransactionHistory";
import user from "./profile/user.json";
import data from "./statistics/data.json";
import friends from "./friendlist/friends.json";
import transactions from "./transactions/transactions.json";
function App() {
  let { username, tag, location, avatar, stats: statsUser } = user;
  // let { statsData } = data;
  // print(data);
  return (
    <div className="App">
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={statsUser}
      ></Profile>
      <Statistics title="fjfjf" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
}

export default App;
