import { SEND_MESSAGE } from "../actions/types";
const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81h11_OyPvHqNZezAxKm8IbH3AEZl21NL1UqTIbk&s';
const initialState = {
  currentUserId: 3,
  conversions: [
    {
      fromId: 1,
      toId: 3,
      message: "message 1",
    },
    {
      fromId: 3,
      toId: 1,
      message: "message 2",
    },
    {
      fromId: 3,
      toId: 1,
      message: "message 3",
    },
    {
      fromId: 3,
      toId: 1,
      message: "message 4",
    },
    {
      fromId: 3,
      toId: 1,
      message: "message 5",
    },
    {
      fromId: 3,
      toId: 1,
      message: "message 6",
    },
    {
      fromId: 3,
      toId: 1,
      message: "message 7",
    },
    {
      fromId: 3,
      toId: 1,
      message: "message 8",
    },
  ],
  users: [
    {
      id: 1,
      name: "User 1",
      image,
    },
    {
      id: 2,
      name: "User 2",
      image,
    },
    {
      id: 3,
      name: "User 3",
      image,
    },
  ],
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const conversions = [...state.conversions];

      conversions.push({...action.payload,fromId:state.currentUserId});
      return {
        ...state,
        conversions,
      };
    }
    default:
      return state;
  }
}
