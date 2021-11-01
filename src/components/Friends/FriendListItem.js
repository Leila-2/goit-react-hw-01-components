import PropTypes from 'prop-types';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
          width: 10,
          height: 10,
          display: 'block',
          borderRadius: 100,
        }}
      ></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};
FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};
export default FriendsListItem;
