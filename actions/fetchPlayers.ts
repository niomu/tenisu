import { GET_PLAYERS } from "@/reducers/Data";

const fetchPlayers = (dispatch) => {
    return async () => {
        try {
            const response = await fetch("/api/home");
            const data = await response.json();
            dispatch({ type: GET_PLAYERS, payload: data.players });
        } catch (error) {
            console.log(error);
        }
    };
};

export default fetchPlayers;
