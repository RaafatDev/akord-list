import { SongsList } from "@/components/SongsList";
import { getSortedSongsData } from "@/lib/song";

export default function Home() {
    const songs = getSortedSongsData();

    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <main className="px-6 mx-auto">
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">Home Page</p>

            <SongsList songs={songs} />
        </main>
    );
}
