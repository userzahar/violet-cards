
import backgroundLine from '../../images/Rectangle.png'
import { FollowButton } from "../FollowButton/FollowButton"
import defaultAvatar from '../../images/Hansel.png'
import { UserCardHeader } from '../UserCardHeader/UserCardHeader'
import { useState } from 'react'
import { UserAvatar } from 'components/UserAvatar/UserAvatar'
export const UserCard = () => {
    const [avatar, addAvatar] = useState(defaultAvatar);
    console.log("🚀 ~ addAvatar:", addAvatar)
    // const [isFollow, addIsFollow] = useState(false);
    // const [followers, addFollowers] = useState(100500);
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
            <p>TWEETS</p>
            <p>FOLLOWERS</p>
            <FollowButton/>
        </div>
    </div>
}