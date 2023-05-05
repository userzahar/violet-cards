
import backgroundLine from '../../images/Rectangle.png'
import { FollowButton } from "../FollowButton/FollowButton"
import defaultAvatar from '../../images/Hansel.png'
import { UserCardHeader } from '../UserCardHeader/UserCardHeader'
import { useState,useEffect } from 'react'
import { UserAvatar } from 'components/UserAvatar/UserAvatar'
import getUsers from 'apiOperation.js/apiOperation'
export const UserCard = () => {
    const [avatar, addAvatar] = useState(defaultAvatar);
    
    // const [isFollow, addIsFollow] = useState(false);
    // const [followers, addFollowers] = useState(100500);
    useEffect(() => {
        getUsers().then(res => {
            addAvatar(res.data[0].avatar)
        }).finally(res => {
            console.log("add avatar",avatar)
        });
    }, [avatar])

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