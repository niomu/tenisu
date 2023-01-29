import { initialState } from "@/contexts/Data";
import DataInterface from "@/interfaces/Data";

export const SEARCH_PLAYER = "SEARCH_PLAYER";
export const GET_PLAYERS = "GET_PLAYERS";
export const RESET_DATA = "RESET_DATA";

const DataReducer = (state, action: any): DataInterface => {
    switch (action.type) {
        case SEARCH_PLAYER:
            return {
                ...state,
                players: action.payload,
            };
        case GET_PLAYERS:
            return {
                ...state,
                players: action.payload,
            };
        case RESET_DATA:
            return { ...initialState };
        default:
            return state;
    }
};

export default DataReducer;
