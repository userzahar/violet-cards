import { Homepage } from "pages/Homepage/Homepage"
import { Tweets } from "pages/Tweets/Tweets"
import {  Route, Routes } from "react-router-dom"
export const RoutesComponent = () => {
    return (<>
    <main>
         <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Homepage />} />
      </Routes>   
    </main></>
  )
}