import React from "react";
import css from "./ToUserBox.module.css";

const ToUserBox = () => {

  return (
    <div className={css.ToUserBox}>
      <div className={css.circle} title="HB"></div>
      <div className={css.email} > <i className="fa fa-envelope"></i> henryboyd@gmail.com</div>
      <div className={css.email} > <i className="fa fa-user-circle-o"></i> Henry Boyd</div>
      <div  className={css.archive}> Archive <i className="fa fa-archive"></i></div>
    </div>
  );
};

export default ToUserBox;
