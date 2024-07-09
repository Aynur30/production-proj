import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALsTORAGE_KEY } from 'shared/const/localStorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthByData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },

        InitAuthByData: (state) => {
            const user = localStorage.getItem(USER_LOCALsTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        Logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALsTORAGE_KEY);
        }
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
