import avatarBorder from '../../images/Ellipse.png'

export const UserAvatar = ({userAvatar}) => {
    return (
        <div style={{
                position: "absolute",
                top:-26,
                right:"50% - 40px",
                width: 80,
                height: 80,
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                backgroundImage: `url(${avatarBorder})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: '0 0',
            }}>
                <img src={userAvatar} style={{
                position: "absolute",
                    borderRadius:"50%",
                backgroundColor:"#471CA9",
                    bottom:16,
                    width: 57,
                    height: 57,
                    fill:"red",
                }} alt="User avatar" />
            </div>)
}