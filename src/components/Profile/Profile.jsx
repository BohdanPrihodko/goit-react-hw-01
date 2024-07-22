
import css from "./Profile.module.css";

const Profile = ({
    name,
    tag,
    location,
    image,
    stats,
}) => {
    return (
    <div className={css.profileBox}>
        <div className={css.infoBox}>
            <img className={css.avatar}
             src={image}
             alt="User avatar"
            />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.statisticsList}>
            <li className={css.statisticsItem}>
            <span className={css.itemTitle}>Followers</span>
                    <span className={css.statValue}>{stats.followers}</span>
            </li>
            <li className={css.statisticsItem}>
            <span className={css.itemTitle}>Views</span>
                    <span className={css.statValue}>{stats.views}</span>
            </li>
            <li className={css.statisticsItem}>
            <span className={css.itemTitle}>Likes</span>
            <span className={css.statValue}>{stats.likes}</span>
            </li>
        </ul>
   </div>
    )
}


export default Profile;