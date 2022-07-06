import { React } from "react";
import FriendListItem from "./FriendListItem";
const FriendList = (props) => {
  let { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
};
export default FriendList;
