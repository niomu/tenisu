import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import SearchView from "@/components/SearchView";
import PlayerDetails from "@/components/PlayerDetails";
import { DataProvider } from "@/contexts/Data";
import { useState } from "react";

export default function Home() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <Head>
                <title>TENISU</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DataProvider>
                <div className={`${styles.container} ${styles.background}`}>
                    <SearchBar />
                    <SearchView setSelected={setSelected} />
                </div>
            </DataProvider>
            {selected && <PlayerDetails setSelected={setSelected} />}
        </>
    );
}
