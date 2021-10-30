import FriendsListItem from './FriendListItem';
export default function FriendsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <FriendsListItem avatar={item.avatar} name={item.name} />
        </li>
      ))}
    </ul>
  );
}
