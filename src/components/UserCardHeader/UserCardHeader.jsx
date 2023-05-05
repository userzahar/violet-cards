import logoImage from "../../images/Logo.png"
import backgroundImg from '../../images/bg-card.png'
export const UserCardHeader = () => {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: '36px 28px',
            height: 214,
            padding:20,
        }}>
            <img src={logoImage} alt="logo GoIt" />
        </div>)
}