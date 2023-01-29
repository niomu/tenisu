import type { NextApiRequest, NextApiResponse } from "next";
import getPlayers from "@/lib/getPlayers";
import DataInterface from "@/interfaces/Data";

type Data = DataInterface;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "GET")
        return res.status(405).json({ error: "Method not allowed" });
    try {
        const data = await getPlayers(4);
        res.status(200).json({ players: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ players: [] });
    }
}
