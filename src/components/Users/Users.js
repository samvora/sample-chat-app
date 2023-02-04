import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../../selectors";
import css from "./Users.module.css";

const Users = ({ onSelect, selectedId }) => {
  const [isActive, setActive] = useState(true);
  const users = useSelector(getUsers());

  return (
    <div className={css.Users}>
      <div
        onClick={() => setActive(!isActive)}
        className={css.wrapperConversations}
      >
        <div>Active Conversations</div>
        <div>{isActive ? "<" : ">"}</div>{" "}
      </div>
      {isActive &&
        users.map((user) => {
          return (
            <div
              key={user.id}
              className={css.User + " " + (selectedId === user.id && css.active)}
              onClick={() => onSelect(user)}
            >
              <img alt="" className={css.profileImage} src={user.image} />

              <div>{user.name}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Users;
