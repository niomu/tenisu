import getPlayers from "@/lib/getPlayers";
import getPlayersById from "@/lib/getPlayersById";
import getPlayersByName from "@/lib/getPlayersByName";

describe("Lib for API", () => {
    beforeAll((done) => {
        done();
    });

    afterAll(() => {});

    test("getPlayersById", async () => {
        const id = 52;
        const result = await getPlayersById(id);
        expect(result.id).toBe(id);
    });

    test("getPlayersByName", async () => {
        const name = "Novak Djokovic";
        const result = await getPlayersByName(name);
        const [a, b] = name.split(" ");
        expect(result[0].firstname).toBe(a);
        expect(result[0].lastname).toBe(b);
        const name2 = "Novak";
        const result2 = await getPlayersByName(name2);
        expect(result2[0].firstname).toBe(name2);
        const name3 = "Djokovic";
        const result3 = await getPlayersByName(name3);
        expect(result3[0].lastname).toBe(name3);
    });

    test("getPlayers", async () => {
        const n = 4;
        const result = await getPlayers(n);
        expect(result.length).toBe(n);
        const n2 = 2;
        const result2 = await getPlayers(n2);
        expect(result2.length).toBe(n2);
    });
});
