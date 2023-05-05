
import backgroundLine from '../../images/Rectangle.png'
import { UserCardHeader } from '../UserCardHeader/UserCardHeader'
import { UserAvatar } from 'components/UserAvatar/UserAvatar'

export const UserCard = ({ userInfo, children }) => {
    console.log("🚀 ~ userInfo:", userInfo)
    const { avatar, followers, tweets} = userInfo;
    return <li style={{
        backgroundColor: "#471CA9",
        width: 380,
        marginBottom: 20,
    }}>
        <UserCardHeader/>
        <div style={{
            width: "33.333% - 10px",
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
            <p>{followers.toLocaleString('en-US')} FOLLOWERS</p>
            {children}
        </div>
    </li>
}