import React from "react";
import DataInterface from "@/interfaces/Data";
import DataReducer from "@/reducers/Data";

export const initialState: DataInterface = { players: [] };

export const DataContext = React.createContext();

export const DataProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(DataReducer, initialState);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};
