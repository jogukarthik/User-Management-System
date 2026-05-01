import { createSlice } from "@reduxjs/toolkit";
type user={
    name:string,
    email:string,
    password:string
}
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
            console.log(state.user);
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;