import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types';

interface UserState {
  users: IUser[];
  targetUser: IUser | null;
}

const initialState: UserState = {
  users: [],
  targetUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setTargetUser(state, action: PayloadAction<IUser | null>) {
      state.targetUser = action.payload;
    },
  },
});

export default userSlice.reducer;
