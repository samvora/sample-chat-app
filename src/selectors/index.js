export const getCurrentConversation = () => {
  return (state) => {
    const filteredData =  state.chat.conversions.filter((c) => {
      return (
        (c.fromId === state.chat.currentUserId && c.toId === state.chat.activeConversationId) ||
        (c.fromId === state.chat.activeConversationId && c.toId === state.chat.currentUserId)
      );
    });

    const getUser = (id)=>{
      return state.chat.users.find((u) => u.id === id)
    }
    return filteredData.map(messageData=>{
      return {
        ...messageData,
        isFrom:messageData.fromId === state.chat.currentUserId, 
        from: getUser(messageData.fromId),
        to: getUser(messageData.toId),
      }
    })
  };
};

export const getConversations = () => {
  return (state) => {
    return state.chat.conversions;
  };
};
export const getAuthUserCard = () => {
  return (state) => {
    return state.chat.users.find((u) => u.id === state.chat.currentUserId);;
  };
};

export const getToUserCard = () => {
  return (state) => {
    return state.chat.users.find((u) => u.id === state.chat.activeConversationId);;
  };
};
export const getActiveUsers = () => {
  return (state) => {
    return state.chat.users.filter((u) => u.id !== state.chat.currentUserId && !state.chat.archivedUserIds.includes(u.id));
  };
};

export const getArchivedUsers = () => {
  return (state) => {
    return state.chat.users.filter((u) => u.id !== state.chat.currentUserId && state.chat.archivedUserIds.includes(u.id));
  };
};


export const isCurrentConversationArchived = () => {
  return (state) => {
    return state.chat.archivedUserIds.includes(state.chat.activeConversationId);
  };
};