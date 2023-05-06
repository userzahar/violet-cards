import { RevolvingDot } from "react-loader-spinner";
import { HomeTitle, HomepageContainer } from "./Homepage.styled";
import { LinkStyled } from "pages/Tweets/Tweens.styled";

export const Homepage = () => <HomepageContainer>
  <LinkStyled to="/tweets">Tweets</LinkStyled>
  <HomeTitle>WELCOME TO THE VIOLET CARDS</HomeTitle>
  <div style={{ marginTop: "12%" }}><RevolvingDot
      height="30"
      width="30"
      radius="30"
      color="#471CA9"
      secondaryColor=''
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    /></div>
</HomepageContainer>;