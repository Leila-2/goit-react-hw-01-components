import PropTypes from 'prop-types';
import s from '../User/User.module.css';

export default function User({
  name,
  tag,
  location,
  avatar,
  followers,
  veiws,
  likes,
}) {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img className={s.img} src={avatar} alt="Аватар пользователя" />

        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.list}>
        <li>
          <span>Followers ...........</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views .................</span>
          <span>{veiws}</span>
        </li>
        <li>
          <span>Likes ..................</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  followers: PropTypes.number,
  veiws: PropTypes.number,
  likes: PropTypes.number,
};
