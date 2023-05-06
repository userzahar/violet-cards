import { Route, Routes } from "react-router-dom"
import { lazy } from "react";
import { Header } from "./Header/Header";

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));

export const App = () => {
  return (

      <Routes>
          <Route path="/" element={<Header/>}>
                <Route index element={<Homepage />} />
                {/* <Route path="*" element={<Homepage />} /> */}
                <Route path="/tweets" element={<Tweets />} />
          </Route>
      </Routes>   

  );
};

