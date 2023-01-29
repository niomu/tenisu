import { useEffect, useContext } from "react";
import styles from "@/styles/SearchView.module.css";
import { DataContext } from "@/contexts/Data";
import PlayerCard from "@/components/PlayerCard";
import fetchPlayers from "@/actions/fetchPlayers";
import DataInterface from "@/interfaces/Data";

export default function SearchView({ setSelected }: { setSelected: any }) {
    const {
        state: { players },
        dispatch,
    } = useContext(DataContext) as { state: DataInterface; dispatch: any };

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
