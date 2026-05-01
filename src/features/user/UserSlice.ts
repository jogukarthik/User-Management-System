import { createSlice } from "@reduxjs/toolkit";

const user={
    name:"",
    email:"",
    password:""
}
const userSlice = createSlice({
    name: "user",
    initialState: {
       user
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;