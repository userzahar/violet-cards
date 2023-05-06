import { UnfollowButtonStyled } from "./UnfollowButton.styled"

export const UnfollowButton = ({heandleUnfollow,idUserBtn}) => {
    return <UnfollowButtonStyled
        onClick={() => heandleUnfollow(idUserBtn)}>FOLLOWING</UnfollowButtonStyled>
}
