import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentConversation } from "../../selectors";
import { sendMessage } from "../../actions";
import css from "./Chat.module.css";
import { timeAgo } from "../../utilities/general.helper";
import Button from "../Button";
import Picker from '@emoji-mart/react'

const Chat = () => {
  const [text, setText] = useState("");
  const [showEmoji, toggleEmoji] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();

  const messages = useSelector(getCurrentConversation());

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);
  const addEmoji = e => {
    let sym = e.unified.split('-')
    let codesArray = []
    sym.forEach(el => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    setText(prevText=>prevText+ emoji);
    toggleEmoji(false);
  };
  const saveMessage = () => {
    if (text) {
      dispatch(sendMessage({ message: text}));
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
               <div style={{position:'relative'}}>
                <img alt="" src={message.from?.image} />
                <div className={css.online+' '+(message.isFrom && message.from.isOnline && css.active)}></div>

              </div>
              <div className={css.messageContainer}>
            
                <div className={css.message}>{message.message}</div>
                <div className={css.time}>{timeAgo(message.createdAt)}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={css.sendMessage}>
        <div className={css.fileUpload}>
          <input type="file" id="upload" hidden/>
          <label for="upload"><i className="fa fa-paperclip"></i></label>
        </div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter your message here"
        />
        <div className={css.emojiContainer}>
          <div onClick={()=>toggleEmoji(!showEmoji)}>😀</div>
          {showEmoji && <Picker onEmojiSelect={addEmoji} />}
        </div>
        <Button onClick={saveMessage} icon="rightArrow">Send</Button>
      </div>
    </div>
  );
};

export default Chat;
