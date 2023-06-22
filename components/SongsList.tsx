import { getSortedSongsData } from "@/lib/song";
import ListItem from "./ListItem";

export const SongsList = () => {
    const songs = getSortedSongsData();

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90">Songs</h2>
            <ul className="w-full dark:text-white">
                {songs.map(
                    song => (
                        <ListItem key={song.id} song={song} />
                    )
                    // JSON.stringify(song, null, 4)
                )}
            </ul>
        </section>
    );
};
