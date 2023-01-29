import { SEARCH_PLAYER } from "@/reducers/Data";

const seachPlayer = (dispatch: any) => {
    return async (search: string) => {
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
