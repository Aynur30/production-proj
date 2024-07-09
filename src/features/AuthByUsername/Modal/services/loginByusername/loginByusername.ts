import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALsTORAGE_KEY } from "shared/const/localStorage";


interface loginByusernameProps {
    username: string;
    password: string;
}
export const loginByusername = createAsyncThunk<User, loginByusernameProps>(
    'login/loginByusername', 
    async ({username, password}, thunkApi) => {
        try {
            const response = axios.post('http://localhost:8000/login',{username, password} );

            if (!(await response).data){
                throw new Error();
            }

            localStorage.setItem(USER_LOCALsTORAGE_KEY, JSON.stringify((await response).data))
            thunkApi.dispatch(userActions.setAuthByData((await response).data));

            return (await response).data;
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue('Вы ввели неверный логин и пароль');
        }
    }
)