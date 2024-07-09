import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loginSchema } from '../types/loginSchema'
import { loginByusername } from '../services/loginByusername/loginByusername';

const initialState: loginSchema = {
    isLoading: false,
    username: '',
    password: ''
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(loginByusername.pending,( state)=>{
            state.error = undefined;
            state.isLoading = true;
        }),
        builder.addCase(loginByusername.fulfilled,( state)=>{
            state.isLoading = false;
        }),
        builder.addCase(loginByusername.rejected,( state, action)=>{
            state.error = "action.payload";
            state.isLoading = true;
        })
    }
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
