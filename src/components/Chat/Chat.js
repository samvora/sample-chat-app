import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversation } from "../../selectors";
import { sendMessage } from "../../actions";
import css from "./Chat.module.css";

const Chat = ({ selectedId }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();

  const messages = useSelector(getConversation(selectedId));

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);
  const saveMessage = () => {
    if (text) {
      dispatch(sendMessage({ message: text, toId: selectedId }));
      setText("");
    }
  };
 
  return (
    <div className={css.Chat}>
      <div className={css.messageList} ref={ref}>
        {messages.map((message,index) => {
          return (
            <div key={index}
              className={
                css.singleMessage + " " + (message.isFrom && css.fromMessage)
              }
            >
              <img alt="" src={message.from?.image} />
              <div className={css.message}>{message.message}</div>
            </div>
          );
        })}
      </div>
      <div className={css.sendMessage}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter your message here"
        />
        <button onClick={saveMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
