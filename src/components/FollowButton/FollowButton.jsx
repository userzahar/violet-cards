import { FollowButtonStyled } from "./FollowButton.styled"

export const FollowButton = ({heandleFollow,idUserBtn}) => {

    return <FollowButtonStyled
        onClick={() => heandleFollow(idUserBtn)}>FOLLOW</FollowButtonStyled>
}
