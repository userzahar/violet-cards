import { Suspense, lazy } from "react";
import {  Route, Routes } from "react-router-dom"
import { HeaderLink, HeaderStyled } from "./App.styled";

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));

export const App = () => {
  return (<div>
         <HeaderStyled>
      <nav>
        <HeaderLink to="/" end>Home</HeaderLink>
        <HeaderLink to="/tweets">Tweets</HeaderLink>
      </nav>
    </HeaderStyled>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path="/">
                    <Route index element={<Homepage />} />
                    <Route path="*" element={<Homepage />} />
                    <Route path="/tweets" element={<Tweets />} />
              </Route>
          </Routes>
      </Suspense>
    </main> 
  </div>        
  );
};

