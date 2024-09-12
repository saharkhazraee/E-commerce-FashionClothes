// import axios from "axios"
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     isAuthenticated: false,
//     isLoading:false,
//     user:null,
//     token:null,
    
// }
// export const registerUser = createAsyncThunk(
//     "/auth/register",
//      (formData) => {
//         console.log("registeruser")
//       const response =  axios.post("http://localhost:7000/api/v1/auth/register",formData,
//         {
//           withCredentials: true,
//         }
//       );
//   console.log(response,"data",withCredentials)
//       return response.data;
//     }
//   );
  
// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers:{
//         setUser:(state,action)=>{
            
//         },
//         // login:(state,action)=>{
//         //     state.token=action.payload.token
//         //     state.user=action.payload.user
//         // },
//         // logout:(state)=>{
//         //     state.token=null
//         //     state.user=null
//         // }
//     },
//     extraReducers: (builder) => {
//         builder
//           .addCase(registerUser.pending, (state) => {
//             state.isLoading = true;
//           })
//           .addCase(registerUser.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.user = null;
//             state.isAuthenticated = false;
//           })
//           .addCase(registerUser.rejected, (state, action) => {
//             state.isLoading = false;
//             state.user = null;
//             state.isAuthenticated = false;
//           })
//         }
// })
// export const {setUser}=authSlice.actions
// export default authSlice.reducer

import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:null,
    token:null,
    isAuthenticated:false
}

const authSlice=createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        login:(state,action)=>{
            console.log(action,"loginAction")
            state.token=action.payload.token
            state.user=action.payload.user
        },
        logout:(state)=>{
            state.token=null
            state.user=null
        }
    }
})
export const {login,logout}=authSlice.actions
export default authSlice.reducer