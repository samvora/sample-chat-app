import React from "react";
import css from "./Snackbar.module.css";

const Snackbar = ({ message }) => {
  return (
    <div className={css.Snackbar + " " + (message && css.show)}>{message}</div>
  );
};

export default Snackbar;
