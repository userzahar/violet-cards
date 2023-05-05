import { useEffect, useState } from "react";
import { UserCard } from "./UserCard/UserCard";
import getUsers from "apiOperation.js/apiOperation";

export const App = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUsers().then(res => {
          console.log("🚀💛 ~ res:", res?.data)
            setUserData(res.data)
        }).finally(res => {
            console.log("add userData",userData)
        });
    }, [userData])
  return (<>
    <UserCard/></>
  );
};
