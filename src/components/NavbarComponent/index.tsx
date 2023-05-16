import { useState } from "react";
import styles from "./Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import side_logo from "../../assets/side-logo.png";
import avatar from "../../assets/avatar.png";

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  const avatarMenuToggler = () => {
    const menu = document.querySelector(`.${styles.menu}`) as HTMLElement;
    menu.classList.toggle("active");
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <img src={side_logo} className={styles.side_logo_image} alt="" />
        </div>

        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className={styles.nav__item} href={"/"}>
              Sobre
            </a>
            <a className={styles.nav__item} href={"/"}>
              Minhas receitas
            </a>
            <div className={styles.nav__button__container}></div>
          </nav>
        </div>
        <div>
          <div className={styles.profile} onClick={avatarMenuToggler}>
            <img src={avatar} alt="profile image" />
          </div>
          <div className={styles.menu}>
            <h3>nome do usuario</h3>
            <ul>
              <li>
                <a href="/">Perfil</a>
              </li>
              <li>
                <a href="/">Configurações</a>
              </li>
              <li>
                <a href="/">Sair</a>
              </li>
            </ul>
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
