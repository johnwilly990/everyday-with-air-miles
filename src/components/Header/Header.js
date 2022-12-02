import { useState } from "react";
import Modal from "../Modal/Modal";
import burgerMenu from "../../assets/icons/vector.svg";
import logo from "../../assets/icons/logo.svg";
import cardIcon from "../../assets/icons/card.svg";
import cashMilesIcon from "../../assets/icons/cash-miles.svg";
import dreamMilesIcon from "../../assets/icons/dream-miles.svg";
import "./Header.scss";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="header">
      <div className="header__container-1">
        <img src={burgerMenu} alt="burger menu" className="header__menu" />
        <img src={logo} alt="burger menu" className="header__menu" />
        <img
          src={cardIcon}
          alt="burger menu"
          className="header__menu"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <div className="header__container-2">
        <div className="header__items-wrapper header__items-wrapper--1">
          <img
            src={cashMilesIcon}
            alt="cash icon"
            className="header__cash-icon"
          />
          <div className="header__text-wrapper ">
            <p className="header__points header__points--cash">165</p>
            <p className="header__plan header__plan--cash">CASH MILES</p>
          </div>
        </div>
        <div className="header__items-wrapper header__items-wrapper--2">
          <img
            src={dreamMilesIcon}
            alt="cash icon"
            className="header__dreams"
          />
          <div className="header__text-wrapper">
            <p className="header__points header__points--dream">11</p>
            <p className="header__plan header__plan--dream">DREAM MILES</p>
          </div>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </header>
  );
}

export default Header;
