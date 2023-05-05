import { useEffect, useState } from "react";
import { UserCard } from "./UserCard/UserCard";
import getUsers from "apiOperation.js/apiOperation";

export const App = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUsers().then(res => {
      setUserData([...res.data])
      console.log("add userData",userData)
        }).catch(er=>console.log(er))
    },[])
  return (
    <>
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
                return <UserCard key={user.id} userInfo={user} />
            })}
          </ul>)
        } 
  </>
  );
};
