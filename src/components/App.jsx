import { useEffect, useState } from "react";
import { UserCard } from "./UserCard/UserCard";
import getUsers from "apiOperation.js/apiOperation";

export const App = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUsers().then(res => {
          console.log("🚀💛 ~ res:", res?.data)
      setUserData(prev => ([...prev, ...res.data]))
      console.log("add userData",userData)
        }).catch(er=>console.log(er))
    }, [])
  return (
    <>
      
        {
        userData.length !== 0 && (
          <ul>{
            userData.map((user) => {
                return (
                    <li key={user.id}>
                          <UserCard userInfo={user} />
                    </li>)
            })}
          </ul>)
        }
      
  </>
  );
};
