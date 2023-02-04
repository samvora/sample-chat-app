import React from "react";
import css from "./ActivityBox.module.css";
import Box from "./../Box";

const ActivityBox = () => {
  const list = [
    { icon: "fa-clock-o", theme: "blue", text: "13h", sub: "Time" },
    { icon: "fa-group", theme: "green", text: "188", sub: "Atendeed" },
    { icon: "fa-sticky-note-o", theme: "pink", text: "199", sub: "Meetings" },
    { icon: "fa-comments-o", theme: "red", text: "41", sub: "Rejected" },
  ];
  return (
    <div className={css.ActivityBox}>
      <div className={css.boxList}>
        {list.map((item, index) => {
          return <Box key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ActivityBox;
