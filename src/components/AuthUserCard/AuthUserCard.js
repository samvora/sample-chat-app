import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getAuthUserCard } from "../../selectors";
import SwitchComponent from "../SwitchComponent/SwitchComponent";
import css from "./AuthUserCard.module.css";

const AuthUserCard = () => {
  const user = useSelector(getAuthUserCard());
  const [isChecked, toggle] = useState();
  const ref = useRef();
  const meunuRef = useRef();
  const [isMenuActive, toggleActiveMenu] = useState();
  const toggleMenu = () => {
    const el = ref.current;
    console.log(el.offsetTop, el.offsetLeft);
    meunuRef.current.style.top = `${el.offsetTop + 20}px`;
    meunuRef.current.style.left = `${
      el.offsetLeft - 10
    }px`;
    toggleActiveMenu(!isMenuActive);
  };
  return (
    <div className={css.AuthUserCard}>
      <img alt="" src={user.image} />
      <div className={css.name}>{user.name}</div>
      <div className={css.profession}>
        Lead designer
        <i
          className={css.icon+" fa fa-cog"}
          ref={ref}
          onClick={toggleMenu}
        />
      </div>
     
        <div ref={meunuRef} className={css.menu+' '+(!isMenuActive && css.hide)}>
          <div>item 1</div>
          <div>item 2</div>
        </div>
    
      <SwitchComponent isChecked={isChecked} toggle={toggle} />
    </div>
  );
};

export default AuthUserCard;
