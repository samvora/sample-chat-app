import React from "react";
import css from "./SwitchComponent.module.css";

const SwitchComponent = ({ toggle, isChecked }) => {
  return (
    <div className={css.SwitchComponent}>
      <label>
        <input type="checkbox" checked={isChecked}  onChange={()=>toggle(!isChecked)}/>
        <span className={css.slider}></span>
      </label>
    </div>
  );
};

export default SwitchComponent;
