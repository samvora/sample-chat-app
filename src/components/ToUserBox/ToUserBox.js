import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToUserCard, isCurrentConversationArchived } from "../../selectors";
import { toggleArchive } from "../../actions";
import css from "./ToUserBox.module.css";
import Button from "../Button";

const ToUserBox = () => {
  const activeConversationUser = useSelector(getToUserCard());
  const isActiveConversationArchived = useSelector(isCurrentConversationArchived());
  const initials = activeConversationUser.name.split(' ').map(i=>i[0]).join('');
  const dispatch = useDispatch();
  const handleArchive = ()=>{
    dispatch(toggleArchive());
  }
  return (
    <div className={css.ToUserBox}>
      <div className={css.circle} title={initials}></div>
      <div className={css.email} > <i className="fa fa-envelope"></i> henryboyd@gmail.com</div>
      <div className={css.email} > <i className="fa fa-user-circle-o"></i> {activeConversationUser.name}</div>
      <Button theme="inverse" className={css.archive} onClick={handleArchive} icon="archive">{isActiveConversationArchived?'Restore':'Archive'}</Button>
    </div>
  );
};

export default ToUserBox;
