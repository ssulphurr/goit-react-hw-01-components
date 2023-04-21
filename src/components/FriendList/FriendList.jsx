import { PropTypes } from 'prop-types'
import css from './FriendList.module.css'
import {FriendListItem} from '../FriendListItem/FriendListItem'

export const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
       {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
        ))}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.isRequired,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool,
        name: PropTypes.string,
    }))
}