import { PropTypes, shape } from 'prop-types'
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li key={id} className={css.item}>
                <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        ))}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.node.isRequired,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool,
        name: PropTypes.string,
    }),),
}