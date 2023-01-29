import type { NextApiRequest, NextApiResponse } from "next";
import getPlayers from "@/lib/getPlayersById";
import { DataElement } from "@/interfaces/Data";

type Data = DataElement;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "GET")
        return res.status(405).json({ error: "Method not allowed" });
    const { id } = req.query;
    if (typeof id !== "number")
        return res.status(400).json({ error: "Bad request" });
    try {
        const data = await getPlayers(id);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({});
    }
}
