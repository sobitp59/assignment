export type UserType = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export type initialStateType = {
  userChips: UserType[];
  allUsers: UserType[];
};

export type UserContextType = {
  userChips: UserType[];
  allUsers: UserType[];
};

export type ActionType =
  | { type: "ADD_CHIP"; payload?: number }
  | { type: "REMOVE_CHIP"; payload?: number };
