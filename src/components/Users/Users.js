import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getActiveUsers,getArchivedUsers, getToUserCard } from "../../selectors";
import css from "./Users.module.css";
import { setActiveConversationId } from "../../actions";
import { useDispatch } from "react-redux";

const Users = () => {
  const [isActive, setActive] = useState(true);
  const [isArchiveActive, setArchiveActive] = useState(true);
  const users = useSelector(getActiveUsers());
  const archivedUsers = useSelector(getArchivedUsers());
  const activeConversationUser = useSelector(getToUserCard());
  const dispatch = useDispatch();

  const handleSelect = (user) => {
    dispatch(setActiveConversationId(user.id));
  };
  return (
    <div className={css.Users}>
      <div
        onClick={() => setActive(!isActive)}
        className={css.wrapperConversations}
      >
        <div>Active Conversations <div className={css.count}><span>{users.length}</span></div></div>
        <div>{isActive ? "<" : ">"}</div>{" "}
      </div>
      {isActive &&
        users.map((user) => {
          return (
            <div
              key={user.id}
              className={
                css.User +
                " " +
                (activeConversationUser.id === user.id && css.active)
              }
              onClick={() => handleSelect(user)}
            >
              <img alt="" className={css.profileImage} src={user.image} />

              <div>{user.name}</div>
            </div>
          );
        })}

      <div
        onClick={() => setArchiveActive(!isArchiveActive)}
        className={css.wrapperConversations}
      >
        <div>Archived Conversations <div className={css.count}><span>{archivedUsers.length}</span></div></div>
        
        <div>{isArchiveActive ? "<" : ">"}</div>{" "}
      </div>
      {isArchiveActive &&
        archivedUsers.map((user) => {
          return (
            <div
              key={user.id}
              className={
                css.User +
                " " +
                (activeConversationUser.id === user.id && css.active)
              }
              onClick={() => handleSelect(user)}
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
