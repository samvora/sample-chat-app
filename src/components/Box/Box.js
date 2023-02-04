import React from "react";
import css from "./Box.module.css";

const Box = ({ icon, theme,text,sub }) => {
  return (
    <div className={css.Box+' '+ css[theme]}>
      <div className={css.icon}><i className={`fa ${icon}`}></i></div>
      <div className={css.detail}>
        <div className={css.text}>{text}</div>
        <div className={css.sub}>{sub}</div>
      </div>
    </div>
  );
};

export default Box;
