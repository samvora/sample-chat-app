import React, { useEffect, useState } from "react";
import Button from "../Button";
import Snackbar from "../Snackbar";
import css from "./CopyBox.module.css";

const CopyBox = () => {
  const [message,setMessage] = useState();

  useEffect(()=>{
    if(message){
      setTimeout(() => {
        setMessage('')
      }, 2000);
    }
  },[message])

  return (
    <div className={css.CopyBox}>
      <Snackbar message={message}/>
      <h2>Onboard Clients</h2>
      <div>Share the link with prospects and discuss all stuff</div>
      <Button className={css.copyLink} onClick={()=>setMessage('Link has been copied')} icon="copy">
        Copy Link
      </Button>
    </div>
  );
};

export default CopyBox;
