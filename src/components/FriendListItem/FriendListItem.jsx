import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.friendCard}>
            <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(isOnline === true ? css.isOnline : css.offline)}>{clsx(isOnline === true ? "Online" : "Offline")}</p>
    </div>
)}


export default FriendListItem