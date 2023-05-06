import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  width: 196px;
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4b2a99;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  & :hover {
    background-color: #f4f4f4;
  }
`;
