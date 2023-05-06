

import { UserCardHeader } from '../UserCardHeader/UserCardHeader'
import { UserAvatar } from 'components/UserAvatar/UserAvatar'
import { UserCardStyled, UserCardMainStyled, UserCardMainTweetsTextStyled, UserCardMainFollowersTextStyled } from './UserCard.styled'

export const UserCard = ({ userInfo, children }) => {
    const { avatar, followers, tweets} = userInfo;
    return <UserCardStyled>
        <UserCardHeader/>
        <UserCardMainStyled>
            <UserAvatar userAvatar={avatar} />
            <UserCardMainTweetsTextStyled>{tweets} TWEETS</UserCardMainTweetsTextStyled>
            <UserCardMainFollowersTextStyled>{followers.toLocaleString('en-US')} FOLLOWERS</UserCardMainFollowersTextStyled>
            {children}
        </UserCardMainStyled>
    </UserCardStyled>
}