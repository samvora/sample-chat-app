import { SEND_MESSAGE } from "./types";

export const sendMessage = ({ message, fromId, toId }) => {
  return {
    type: SEND_MESSAGE,
    payload: {
      message,
      fromId,
      toId,
    },
  };
};
