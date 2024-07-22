import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"

const FriendList = ({ friends, }) => {
    return (
      <ul className={css.friendList}>
        <li className={css.friendItem}>
          {friends.map((friend) => (
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          ))}
        </li>
      </ul>
    );
};

export default FriendList
