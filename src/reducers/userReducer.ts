import { Reducer } from "react";
import { MOCK_USER_DATA } from "../mockData";
import { ActionType, UserType, initialStateType } from "../types";

export const initialState = {
  userChips: [],
  allUsers: [...MOCK_USER_DATA],
};

export const reducerFunction: Reducer<initialStateType, ActionType> = (
  state: initialStateType,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_CHIP":
      const userToAdd = state.allUsers.find(
        (user) => user?.id === action.payload
      );
      return userToAdd
        ? {
            ...state,
            userChips: [...state.userChips, userToAdd as UserType],
            allUsers: state.allUsers.filter(
              (user) => user?.id !== action.payload
            ),
          }
        : state;

    case "REMOVE_CHIP":
      const userToRemove = state.userChips.find(
        (user) => user?.id === action.payload
      );
      return userToRemove
        ? {
            ...state,
            userChips: state.userChips.filter(
              (user) => user?.id !== action.payload
            ),
            allUsers: [...state.allUsers, userToRemove as UserType],
          }
        : state;

    default:
      return state;
  }
};
