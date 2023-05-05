export const UnfollowButton = ({heandleUnfollow,idUserBtn}) => {

    return <button onClick={()=>heandleUnfollow(idUserBtn)} style={{
        width: 196,
        height: 50,
        backgroundColor:"#fff",
    }}>UNFOLLOW</button>
}