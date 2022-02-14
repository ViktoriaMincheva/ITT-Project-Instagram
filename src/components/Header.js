import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import styled from "@emotion/styled";
import "../styles/Header.css";

export default function Header() {

  let location = useLocation();
  const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 960px;
  `
  const InputContainer = styled.div`
    background-color: #efefef;
    padding: 0 16px;
    height: 36px;
    display: flex;
    align-items: center;
    border-radius: 8px;
  `
  const SearchInput = styled.input`
    border: none;
    background-color: #efefef;
    font-size: 16px;
    font-family: inherit;
    font-weight: 300;
  `
  const IconsContainer = styled.div`
    display: flex;
    gap: 24px;
    padding-top: 8px;
  `

  return (
    <header className="Header">
      <HeaderContainer>
        <Link to="/">
          <img src="ig-logo.png" alt="Instagram" style={{"padding-top":"12px" }}/>
        </Link>

        <InputContainer>
          <img src="images/icons/search-gray.png" alt="search" className="input-icon"/>
          <SearchInput type="text" placeholder="Search"/>
        </InputContainer>

        <IconsContainer>
          <Link to="/">
            <img src={location.pathname === "/" ? "images/icons/home-clicked.png" : "images/icons/home.png" } alt="home" className="header-icon" />
          </Link>
          <Link to="/inbox">
            <img src={location.pathname === "/inbox" ? "images/icons/clicked-inbox.png" : "images/icons/inbox.png"} alt="inbox" className="header-icon" />
          </Link>
          <img src="images/icons/create.png" alt="create" className="header-icon" />
          <Link to="/explore">
            <img src={location.pathname === "/explore" ? "images/icons/explore-clicked.png" : "images/icons/explore.png"} alt="explore" className="header-icon" />
          </Link>
          <img src="images/icons/heart.png" alt="notifications" className="header-icon"/>
          <Link to="/my-profile">
            <img src="images/icons/profile.png" alt="profile pic" className="header-icon"/>
          </Link>
        </IconsContainer>
      </HeaderContainer>
    </header>
  );
}
