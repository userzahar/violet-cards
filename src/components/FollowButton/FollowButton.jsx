export const FollowButton = ({heandleFollow,idUserBtn}) => {

    return <button onClick={()=>heandleFollow(idUserBtn)} style={{
        width: 196,
        height: 50,
        backgroundColor:"#EBD8FF",
    }}>FOLLOW</button>
}