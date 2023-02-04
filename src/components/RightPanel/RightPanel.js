import React from "react";
import css from "./RightPanel.module.css";

import ToUserBox from './../ToUserBox'
import ActivityBox from './../ActivityBox'

const RightPanel = () => {

  return (
    <div className={css.RightPanel}>
      <ToUserBox />
      <ActivityBox />
    </div>
  );
};

export default RightPanel;
