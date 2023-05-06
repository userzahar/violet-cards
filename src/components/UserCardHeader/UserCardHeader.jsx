import logoImage from "../../images/Logo.png"
import { UserCardHeaderStyled } from "./UserCardHeader.styled"
export const UserCardHeader = () => {
    return (
        <UserCardHeaderStyled>
            <img src={logoImage} alt="logo GoIt" />
        </UserCardHeaderStyled>)
}
