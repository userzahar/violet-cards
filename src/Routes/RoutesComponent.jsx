import { Homepage } from "pages/Homepage/Homepage"
import { Tweets } from "pages/Tweets/Tweets"
import { Route, Routes } from "react-router-dom"
import { Suspense } from "react";
export const RoutesComponent = () => {
  return (<>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/'>
            <Route index element={<Homepage />} />
            <Route path="*" element={<Homepage />} />
            <Route path="/tweets" element={<Tweets />} />
        </Route>
        </Routes>   
        </Suspense>
    </main></>
  )
}