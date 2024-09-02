import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isAuthenticated: false,
    isLoading:false,
    user:{
        name:'sahar',
        role:" "
    }
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload.user
        }
    }
})
export const {setUser}=authSlice.actions
export default authSlice.reducer