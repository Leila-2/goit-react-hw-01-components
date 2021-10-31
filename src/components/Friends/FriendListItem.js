import PropTypes from 'prop-types';

const FriendsListItem = ({ avatar, name }) => {
  return (
    <>
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
