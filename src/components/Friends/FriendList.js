import FriendsListItem from './FriendListItem';
import s from './Friends.module.css';
export default function FriendsList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <li key={item.id}>
          <FriendsListItem avatar={item.avatar} name={item.name} />
        </li>
      ))}
    </ul>
  );
}
