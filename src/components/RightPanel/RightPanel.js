import React from "react";
import css from "./RightPanel.module.css";

import ToUserBox from './../ToUserBox'
import ActivityBox from './../ActivityBox'
import CopyBox from "../CopyBox";

const RightPanel = () => {

  return (
    <div className={css.RightPanel}>
      <ToUserBox />
      <ActivityBox />
      <CopyBox />
    </div>
  );
};

export default RightPanel;
