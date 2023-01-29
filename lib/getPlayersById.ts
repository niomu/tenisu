import DataInterface from "@/interfaces/Data";
import { DataElement } from "@/interfaces/Data";
import fetch from "node-fetch";

export default async function getPlayersById(id: number): Promise<DataElement> {
    const response = await fetch(
        "https://data.latelier.co/training/tennis_stats/headtohead.json"
    );
    const data = (await response.json()) as DataInterface;
    const players = data.players.filter((v: DataElement) => v.id === id);
    return players[0];
}
