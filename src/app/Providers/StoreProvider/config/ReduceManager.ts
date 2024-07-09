import { AnyAction, ReducersMapObject, combineReducers } from "redux"
import { StateSchema, StateSchemaKey } from "./StateSchema"
import { Reducer } from "redux"

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []
  
    return {
      getReducerMap: () => reducers,

      reduce: (state: StateSchema, action: AnyAction) => {
        // If any reducers have been removed, clean up their state first
        if (keysToRemove.length > 0) {
          state = { ...state }
          for (let key of keysToRemove) {
            delete state[key]
          }
          keysToRemove = []
        }
  
        // Delegate to the combined reducer
        return combinedReducer(state, action)
      },
  
      // Adds a new reducer with the specified key
      add: (key:StateSchemaKey, reducer: Reducer) => {
        if (!key || reducers[key]) {
          return
        }
  
        // Add the reducer to the reducer mapping
        reducers[key] = reducer
  
        // Generate a new combined reducer
        combinedReducer = combineReducers(reducers)
      },
  
      // Removes a reducer with the specified key
      remove: (key:StateSchemaKey) => {
        if (!key || !reducers[key]) {
          return
        }
  
        // Remove it from the reducer mapping
        delete reducers[key]
  
        // Add the key to the list of keys to clean up
        keysToRemove.push(key)
  
        // Generate a new combined reducer
        combinedReducer = combineReducers(reducers)
      }
    }
  }

