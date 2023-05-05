import { useEffect, useRef, useState } from "react";
import { UserCard } from "./UserCard/UserCard";
import { RevolvingDot } from 'react-loader-spinner'
import getUsers from "apiOperation.js/apiOperation";
import { FollowButton } from "./FollowButton/FollowButton";
import { UnfollowButton } from "./UnfollowButton/UnfollowButton";

export const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idUser, setIdUser] = useState([]);
  const heandleFollow = (userID) => {
    setIdUser(prev=>[...prev, userID])
  }
  const heandleUnfollow = (userID) => {
    setIdUser(prev=>prev.filter(value=>value !== userID))
  }
  const isMounted = useRef(false);
  useEffect(() => {
        isMounted.current = true; 
        return () => {
          isMounted.current = false; 
        };
  }, []);
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        if (isMounted.current) {
          setUserData([...response.data]);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading && <RevolvingDot
      height="1000"
      width="1000"
      radius="400"
      color="#471CA9"
      secondaryColor=''
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    /> }
        {
        userData.length !== 0 && (
          <ul style={{
            width: 1200,
            listStyle:"none",
            marginLeft: "auto",
            marginRight:"auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>{
            userData.map((user) => {
              return <UserCard key={user.id} userInfo={user}>
                {idUser.find(id => id === user.id) ? 
                <UnfollowButton heandleUnfollow={heandleUnfollow} idUserBtn={user.id}/>
                :
                <FollowButton heandleFollow={heandleFollow} idUserBtn={user.id} />
                }
              </UserCard>
            })}
          </ul>)
        } 
  </>
  );
};
