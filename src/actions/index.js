import { SEND_MESSAGE, SELECT_ACTIVE_CONVERSATION,TOGGLE_ARCHIVE_USER, TOGGLE_AUTH_ONLINE_STATUS } from "./types";

export const sendMessage = ({ message }) => {
  return {
    type: SEND_MESSAGE,
    payload: {
      message,
    },
  };
};

export const setActiveConversationId = (activeConversationId) => {
  return {
    type: SELECT_ACTIVE_CONVERSATION,
    payload: {
      activeConversationId,
    },
  };
};
export const toggleArchive = () => {
  return {
    type: TOGGLE_ARCHIVE_USER,
  };
};
export const toggleOnlineStatus = () => {
  return {
    type: TOGGLE_AUTH_ONLINE_STATUS,
  };
};
