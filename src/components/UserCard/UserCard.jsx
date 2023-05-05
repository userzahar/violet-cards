
import backgroundLine from '../../images/Rectangle.png'
import { FollowButton } from "../FollowButton/FollowButton"
import { UserCardHeader } from '../UserCardHeader/UserCardHeader'
import { UserAvatar } from 'components/UserAvatar/UserAvatar'

export const UserCard = ({ userInfo }) => {
    console.log("🚀 ~ userInfo:", userInfo)
    const { avatar,followers,tweets, } = userInfo;
    return <div style={{
        backgroundColor: "#471CA9",
        width: 380,
    }}>
        <UserCardHeader/>
        <div style={{
            position:"relative",
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
            <UserAvatar userAvatar={avatar} />
            <p>{tweets} TWEETS</p>
            <p>{followers} FOLLOWERS</p>
            <FollowButton/>
        </div>
    </div>
}