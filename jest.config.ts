import type { Config } from "@jest/types";
import type { JestConfigWithTsJest } from "ts-jest";

const config: Config.InitialOptions & JestConfigWithTsJest = {
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
    },
    resolver: null,
};
export default config;
