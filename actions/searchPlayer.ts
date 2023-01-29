import { SEARCH_PLAYER } from "@/reducers/Data";

const seachPlayer = (dispatch) => {
    return async (search) => {
        try {
            const response = await fetch(
                `/api/search?search=${encodeURI(search)}`
            );
            const data = await response.json();
            dispatch({ type: SEARCH_PLAYER, payload: data.players });
        } catch (error) {
            console.log(error);
        }
    };
};

export default seachPlayer;
