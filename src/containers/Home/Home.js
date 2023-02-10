import React from "react";
import Users from "../../components/Users";
import Chat from "../../components/Chat";
import css from "./Home.module.css";
import AuthUserCard from "../../components/AuthUserCard";
import RightPanel from "../../components/RightPanel";

const Home = () => {

  return (
    <div className={css.Home}>
      <div className={css.leftPanel}>
        <AuthUserCard />
        <Users
        />
      </div>
      <Chat />
      <RightPanel />
    </div>
  );
};

export default Home;
