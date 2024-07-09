import { StateSchema } from "app/Providers/StoreProvider";
import { loginSchema } from "../../types/loginSchema";

export const getLoginState = (state: StateSchema) =>{
    return state?.loginForm;
}