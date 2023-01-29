import { SEARCH_PLAYER } from "@/reducers/Data";

const getPlayer = () => {
    return async (id: number) => {
        try {
            const response = await fetch(
                `/api/get-player?id=${encodeURI(id)}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return {};
        }
    };
};

export default getPlayer;
