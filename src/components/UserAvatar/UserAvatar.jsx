import { UserAvatarStyled } from "./UserAvatar.styled"

export const UserAvatar = ({userAvatar}) => {
    return (
        <UserAvatarStyled>
                <img src={userAvatar} alt="User avatar" />
        </UserAvatarStyled>
    )
}