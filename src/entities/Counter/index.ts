import { counterReducer } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';
import type { CounterSchema } from './model/types/counterSchema';


export {getUserAuthData} from "./model/selectors/getUserAuthData/getUserAuthData"

export {
    counterReducer,
    Counter,
    CounterSchema,
};
