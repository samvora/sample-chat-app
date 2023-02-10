import React from "react";
import css from "./Button.module.css";

const Button = ({ className, onClick, theme = "regular", children,icon }) => {

    let classes = '';
switch (icon) {
    case 'rightArrow':
        classes=   "fa-arrow-right"
        break;
    case 'archive':
        classes=   "fa-archive"
        break;
    case 'copy':
        classes=   "fa-link"
        break;

    default:
        break;
}
  return (
    <div className={className+' '+css.Button + " " + css[theme]}>
      <button onClick={onClick}>{children} {classes && <i className={`fa ${classes}`}></i>}</button>
    </div>
  );
};

export default Button;
