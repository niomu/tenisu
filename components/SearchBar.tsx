import { useState, useContext } from "react";
import styles from "@/styles/SearchBar.module.css";
import { DataContext } from "@/contexts/Data";
import searchPlayer from "@/actions/searchPlayer";

export default function SearchBar() {
    const [playerName, setPlayerName] = useState("");
    const { state, dispatch } = useContext(DataContext);

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                placeholder="Rechercher un joueur"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        searchPlayer(dispatch)(playerName);
                        setPlayerName("");
                    }
                }}
            />
        </div>
    );
}
