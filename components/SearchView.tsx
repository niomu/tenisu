import { useEffect, useContext } from "react";
import styles from "@/styles/SearchView.module.css";
import { DataContext } from "@/contexts/Data";
import PlayerCard from "@/components/PlayerCard";
import fetchPlayers from "@/actions/fetchPlayers";

export default function SearchView({ setSelected }) {
    const {
        state: { players },
        dispatch,
    } = useContext(DataContext);

    useEffect(() => {
        fetchPlayers(dispatch)();
        return () => {};
    }, []);

    return (
        <div className={styles.container}>
            {players.map((player) => (
                <PlayerCard
                    onClick={() => setSelected(player.id)}
                    key={player.id}
                    infos={player}
                />
            ))}
        </div>
    );
}
