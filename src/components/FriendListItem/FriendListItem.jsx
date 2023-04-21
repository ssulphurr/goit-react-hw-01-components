import { PropTypes } from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

// перевіряємо типи в FriendsList, не потрібно ж дублювати, так?

// FriendListItem.propTypes = {
//    id: PropTypes.number.isRequired,
//     avatar: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     name: PropTypes.string.isRequired,
// }
