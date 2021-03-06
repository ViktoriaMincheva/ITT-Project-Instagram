import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";
import styles from "./styles/Header.module.css";
import NavBarProfileMenu from "./NavBarProfileMenu";
import ImageUpload from "./ImageUpload";
import Modal from "./Modal.js";
import Searchbar from './Searchbar';

export default function Header() {

  let location = useLocation();
  const [show, setShow] = useState(false);

  const handleCreate = (e) => {
    setShow(true);
  }

  return (
    <header className={styles.Header}>

      <div className={styles.HeaderContainer}>

        <Link to="/">
          <img src="../images/ig-logo.png" alt="Instagram" className={styles.igLogo}/>
        </Link>

        <Searchbar/>

        <div className={styles.IconsContainer}>

          <Link to="/">
            <img src={location.pathname === "/" ? "../images/icons/home-clicked.png" : "../images/icons/home.png"} alt="home" className={styles.headerIcon} />
          </Link>

          <Link to="/inbox">
            <img src={location.pathname === "/inbox" ? "../images/icons/clicked-inbox.png" : "../images/icons/inbox.png"} alt="inbox" className={styles.headerIcon} />
          </Link>

          <img src={show ? "../images/icons/create-clicked.png" : "../images/icons/create.png"} alt="create" className={styles.headerIcon} onClick={(e) => handleCreate(e)}/>
          <Modal title="Create new post" onClose={() => setShow(false)} show={show}>
            <ImageUpload/>
          </Modal>

          <Link to="/explore">
            <img src={location.pathname === "/explore" ? "../images/icons/explore-clicked.png" : "../images/icons/explore.png"} alt="explore" className={styles.headerIcon} />
          </Link>
          
          <NavBarProfileMenu/>
        </div>
      </div>
    </header>
  );
}
