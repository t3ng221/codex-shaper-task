// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faList } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Holaa</Logo>
      <Nav>
        <NavItem>
          <FontAwesomeIcon icon={faHome} />
          <NavText>Home</NavText>
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faFilm} />
          <NavText>Movies</NavText>
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faTv} />
          <NavText>Series</NavText>
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faList} />
          <NavText>My List</NavText>
        </NavItem>
      </Nav>
      <SubscribeButton>Subscribe Now</SubscribeButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const NavText = styled.span`
  margin-left: 8px;
`;

const SubscribeButton = styled.button`
  background-color: #ff0066;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Header;
