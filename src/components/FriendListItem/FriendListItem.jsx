import { PropTypes } from 'prop-types'
import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return <li key={id} className={css.item}>
                <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
}


FriendListItem.propTypes = {
    id: PropTypes.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    name: PropTypes.string,
}