import { createSlice } from '@reduxjs/toolkit';
type User = {
  name: string;
  email: string;
  password: string;
};
type UserState = {
  data: User | null;
};
const initialState: UserState = {
  data: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      console.log(state.data);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
