import { useState } from "react";
import Users from "../../components/Users";
import Chat from "../../components/Chat";
import css from "./Home.module.css";
import AuthUserCard from "../../components/AuthUserCard";
import RightPanel from "../../components/RightPanel";

const Home = () => {
  const [activeConversationId, setActiveConversationId] = useState(1);


  return (
    <div className={css.Home}>
      <div className={css.leftPanel}>
        <AuthUserCard />
        <Users
          selectedId={activeConversationId}
          onSelect={(user) => setActiveConversationId(user.id)}
        />
      </div>
      <Chat selectedId={activeConversationId} />
      <RightPanel />
    </div>
  );
};

export default Home;
