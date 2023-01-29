import DataInterface from "@/interfaces/Data";
import { DataElement } from "@/interfaces/Data";
import fetch from "node-fetch";

export default async function getPlayersByName(
    name: string
): Promise<DataElement[]> {
    const [a, b] = name.split(" ");
    const response = await fetch(
        "https://data.latelier.co/training/tennis_stats/headtohead.json"
    );
    const data = (await response.json()) as DataInterface;
    const players = data.players.filter(
        (v: DataElement) =>
            v.firstname === a ||
            v.firstname === b ||
            v.lastname === a ||
            v.lastname === b
    );
    return players;
}
