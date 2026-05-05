// store/userSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<User, 'id'>>) => {
      state.users.push({
        id: Date.now(),
        ...action.payload,
      });
      console.log('User added:', action.payload);
      console.log('Current users:', state.users.length);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
