import type { NextApiRequest, NextApiResponse } from "next";
import getPlayers from "@/lib/getPlayersByName";
import DataInterface from "@/interfaces/Data";

type Data = DataInterface;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "GET")
        return res.status(405).json({ error: "Method not allowed" });
    const { search } = req.query;
    if (typeof search !== "string")
        return res.status(400).json({ error: "Bad request" });
    const query = escape(search);
    try {
        const data = await getPlayers(query);
        res.status(200).json({ players: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ players: [] });
    }
}
