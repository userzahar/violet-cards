
import { Suspense } from "react"
import { HeaderLink, HeaderStyled } from "./Header.styled"
import { Outlet } from "react-router-dom"

export const Header = () => {
  return<>
  <HeaderStyled>
      <nav>
        <HeaderLink to="/" end>Home</HeaderLink>
        <HeaderLink to="/tweets">Tweets</HeaderLink>
      </nav>
    </HeaderStyled>
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
}