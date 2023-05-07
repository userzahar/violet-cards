import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GalleryContainerStyled = styled.ul`
  max-width: 1200px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  & nav {
    display: flex;
    gap: 1rem;
  }
`;
export const HeaderLink = styled(NavLink)`
  color: #555;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.1s ease-in-out;
  & :hover {
    background-color: #f4f4f4;
  }
`;
