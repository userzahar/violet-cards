import { useEffect, useRef, useState } from "react";
import { UserCard } from "./UserCard/UserCard";
import { RevolvingDot } from 'react-loader-spinner'
// import { addNumberCurrentUsers,  removeNumberCurrentUser } from "apiOperation.js/apiOperation";
import { followingAPI, unFollowAPI } from "apiOperation.js/followingAPI";
import { FollowButton } from "./FollowButton/FollowButton";
import { UnfollowButton } from "./UnfollowButton/UnfollowButton";
import { addUsers } from "apiOperation.js/getUsersAPI";
import { loadLocal, saveLocal } from "localStorage/localStorage";
import { addNumberCurrentUsers, removeNumberCurrentUser } from "apiOperation.js/apiOperation";

export const App = () => {
  const [users, setUsers]=useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [idUser, setIdUser] = useState([]);
  
  const heandleLoadMore = () => {
    setPage(prev => prev + 1)
    addUsers(page).then(users => { setUsers(prev => [...prev, ...users]) })
  };
  const heandleFollow = (userID) => {
    followingAPI(userID).then(userState => {
      setIdUser(prev => [...prev, userState.id])
    });
    addNumberCurrentUsers(userID).then( res => {
      setUsers(prev => {
        const next = prev.map(current => {
          if (current.id === res.id) return res ;
          return current
        })
        console.log("🚀 ~ next:", next)
        return [...next]
      })
    });
  };
  const heandleUnfollow = (userID) => {
    unFollowAPI(userID)
      .then(userState => {
        setIdUser(prev => prev.filter(value => value !== userID))
      });
    removeNumberCurrentUser(userID).then(res => {
      setUsers(prev => {
        const next = prev.map(current => {
          if (current.id === res.id) return res ;
          return current
        })
        console.log("🚀 ~ next:", next)
        return [...next]
      })
    });
  };

  const isMounted = useRef(false);
  useEffect(() => {
        isMounted.current = true; 
        return () => {
          isMounted.current = false; 
        };
  }, []);

  useEffect(() => {
    if (loadLocal()) {setIdUser(loadLocal())}
    else {setIdUser([])}
  }, []);

  useEffect(() => {
    setTimeout(() => {
            
      saveLocal(idUser)
    }, 200);
  }, [idUser]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await addUsers(1);
        if (isMounted.current) {
          setUsers([...response]);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
console.log(users)
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
        users.length !== 0 && (
          <ul style={{
            width: 1200,
            listStyle:"none",
            marginLeft: "auto",
            marginRight:"auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>{
              users.map((user) => {
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
      <button type="button" onClick={heandleLoadMore}>LOAD MORE</button>
  </>
  );
};
