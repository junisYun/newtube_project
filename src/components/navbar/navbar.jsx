import React, { useRef } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import logo from '../../image/newtube_ico.png';

const Navbar = ({ searchVideo, onLogout }) => {
  const searchRef = useRef();
  const hideSideBar = () => {
    const sidebar = document.querySelector('.sidebar_sideBar__104u_');
    sidebar.classList.toggle('hidden');
  };
  const handleSearch = (event) => {
    event.preventDefault();
    searchVideo(searchRef.current.value);
  };
  const handleLogout = () => {
    onLogout();
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left}>
        <div className={styles.navbar__menu} onClick={hideSideBar}>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className={styles.navbar__logo}>
          <img className={styles.navbar__logo__image} src={logo} alt="" />
          <p className={styles.navbar__logo__title}>NewTube</p>
        </div>
      </div>
      <div className={styles.navbar__center}>
        <div className={styles.navbar__searchBar}>
          <form onSubmit={handleSearch}>
            <input
              className={styles.navbar__searchBar__input}
              ref={searchRef}
              type="text"
            />
          </form>
          <div className={styles.navbar__searchIcon}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      <div className={styles.navbar__right}>
        <FontAwesomeIcon
          icon={faMoon}
          size="2x"
          style={{ marginRight: '20px', cursor: 'pointer' }}
        />
        <FontAwesomeIcon
          icon={faPlusSquare}
          size="2x"
          style={{ marginRight: '20px', cursor: 'pointer' }}
        />
        <FontAwesomeIcon
          icon={faUser}
          size="2x"
          style={{ marginRight: '20px', cursor: 'pointer' }}
        />
        <button className={styles.logout_btn} onClick={handleLogout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
