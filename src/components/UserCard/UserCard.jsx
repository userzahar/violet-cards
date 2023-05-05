
import backgroundLine from '../../images/Rectangle.png'
import { FollowButton } from "../FollowButton/FollowButton"
import { UserCardHeader } from '../UserCardHeader/UserCardHeader'
export const UserCard = () => {
    return <div style={{
        backgroundColor: "#471CA9",
        width: 380,
    }}>
        <UserCardHeader/>
        <div style={{
            height: 246,
            backgroundImage: `url(${backgroundLine})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: '0 0',
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
        }
        }>
            <p>TWEETS</p>
            <p>FOLLOWERS</p>
            <FollowButton/>
        </div>
    </div>
}