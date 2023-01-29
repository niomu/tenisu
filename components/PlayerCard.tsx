import { DataElement } from "@/interfaces/Data";
import styles from "@/styles/PlayerCard.module.css";

export default function PlayerCard({
    infos,
    onClick,
}: {
    infos: DataElement;
    onClick: any;
}) {
    console.log(infos);
    return (
        <div className={styles.container} onClick={onClick}>
            <img className={styles.picture} src={infos.picture} />
            <p className={styles.name}>
                {infos.firstname} {infos.lastname}
            </p>
            <div className={styles["attribute-container"]}>
                <p className={styles["attribute-title"]}>RANK</p>
                <p className={styles["attribute-title"]}>POINTS</p>
                <p className={styles["attribute-title"]}>COUNTRY</p>

                <p className={styles["attribute-value"]}>#{infos.data.rank}</p>
                <p className={styles["attribute-value"]}>{infos.data.points}</p>
                <p className={styles["attribute-value"]}>
                    {infos.country.code}
                </p>
            </div>
        </div>
    );
}
