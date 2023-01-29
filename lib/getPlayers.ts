import DataInterface from "@/interfaces/Data";
import { DataElement } from "@/interfaces/Data";
import fetch from "node-fetch";

export default async function getPlayers(n: number): Promise<DataElement[]> {
    const response = await fetch(
        "https://data.latelier.co/training/tennis_stats/headtohead.json"
    );
    const data = (await response.json()) as DataInterface;
    const players = data.players
        .sort((a: DataElement, b: DataElement) => a.data.rank - b.data.rank)
        .slice(0, n);
    return players;
}
