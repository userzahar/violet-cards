import styled from 'styled-components';
import avatarBorder from '../../images/Ellipse.png';
export const UserAvatarStyled = styled.div`
  position: absolute;
  top: -30px;
  right: calc(50% - 40px);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${avatarBorder});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 0;
  & img {
    position: absolute;
    border-radius: 50%;
    background-color: #471ca9;
    bottom: 16px;
    width: 57px;
    height: 57px;
  }
`;
