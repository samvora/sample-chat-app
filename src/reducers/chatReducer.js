import _ from "lodash";
import { SEND_MESSAGE, SELECT_ACTIVE_CONVERSATION, TOGGLE_ARCHIVE_USER, TOGGLE_AUTH_ONLINE_STATUS } from "../actions/types";
const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81h11_OyPvHqNZezAxKm8IbH3AEZl21NL1UqTIbk&s';
const initialState = {
  currentUserId: 3,
  activeConversationId: 1,
  archivedUserIds:[],
  conversions: [
    {
      fromId: 1,
      toId: 3,
      message: "message 1",
      createdAt: new Date().toISOString(),
    },
  ],
  users: [
    {
      id: 1,
      name: "henry Boyd",
      email:'henryboyd@gmail.com',
      designation:'Lead Designer',
      isOnline:false,
      image,
    },
    {
      id: 2,
      name: "User 2",
      email:'User2@gmail.com',
      designation:'FE Developer',
      isOnline:false,
      image,
    },
    {
      id: 3,
      name: "User 3",
      email:'User3@gmail.com',
      designation:'Lead Developer',
      isOnline:true,
      image,
    },
  ],
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const conversions = [...state.conversions];

      conversions.push({...action.payload,fromId:state.currentUserId,toId:state.activeConversationId,createdAt: new Date().toISOString()});
      return {
        ...state,
        conversions,
      };
    }
    break;
    case TOGGLE_ARCHIVE_USER: {
      const archivedUserIds = [...state.archivedUserIds];
      const userIdToToggle = state.activeConversationId;
     const newArchivedUsersIds =  _.xor(archivedUserIds, [userIdToToggle])
      return {
        ...state,
        archivedUserIds:newArchivedUsersIds,
      };
    }
    break;
    case SELECT_ACTIVE_CONVERSATION: {
      return {
        ...state,
        activeConversationId:action.payload.activeConversationId,
      };
    }
    break;
    case TOGGLE_AUTH_ONLINE_STATUS: {
      const authUserIndex = state.users.findIndex(u=>u.id===state.currentUserId);
      const newUsers = [...state.users];
      newUsers[authUserIndex] = {
        ...newUsers[authUserIndex],
        isOnline:!newUsers[authUserIndex].isOnline
      }
      return {
        ...state,
        users:newUsers,
      };
    }
    break;
    default:
      return state;
  }
}
