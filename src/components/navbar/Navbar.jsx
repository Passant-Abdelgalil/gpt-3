import React, {Fragment, useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.svg";


const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <Fragment>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
    </Fragment>
    );
  
  return (
    <div className={`container ${styles["gpt3__navbar"]}`}>
      <div className={styles["gpt3__navbar-links"]}>
        <div className={styles["gpt3__navbar-links_logo"]}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles['gpt3__navbar-links_container']}>
          <Menu/>
        </div>
        <div className={styles['gpt3__navbar-sign']}>
          <p onClick={props.showOverlay} className={styles['gpt3__navbar-sign_in']}>Sign in</p>
          <button type="button" onClick={props.showOverlay} className={styles['gpt3__navbar-sign_up']}>Sign up</button>
        </div>
        <div className={styles['gpt3__navbar-menu']}>
        {toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className={`scale-up-center ${styles['gpt3__navbar-menu_container']}`}>
            <div className={styles['gpt3__navbar-menu_container-links']}>
              <Menu/>
              <div className={styles['gpt3__navbar-menu_container-links-sign']}>
                <p className={styles['gpt3__navbar-menu_container-links-sign_in']}>Sign in</p>
                <button type="button" className={styles['gpt3__navbar-menu_container-links-sign_up']}>Sign up</button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
