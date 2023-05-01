import React, { createContext, useReducer } from "react";

const initialState = { toDoList: [] };

const store = createContext(initialState)
const { Provider } = store;

function AppStateProvider({ children }) {
    const [state, dispatch] = useReducer((prevState, action) => {
        switch (action.type) {
            case 'TO_DO_LIST_CHANGE':
                return { ...prevState, toDoList: action.toDoList };
            default:
                return prevState;
        }
    }, initialState)

    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    );
}

export { store, AppStateProvider }