import { notFound } from "next/navigation";
import Link from "next/link";
import { LyricsWithChords } from "@/components/LyricsWithChords";
import { getSongData, getSortedSongsData } from "@/lib/song";

export function generateStaticParams() {
    const songs = getSortedSongsData(); // deduped!: we don't have to worry about sending the same request twice ... Next13 will deduped the request since we already got the data

    return songs.map(song => ({
        songId: song.id,
    }));
}

export function generateMetadata({ params }: { params: { songId: string } }) {
    const songs = getSortedSongsData(); // deduped!: we don't have to worry about sending the same request twice ... Next13 will deduped the request since we already got the data
    const { songId } = params;

    const song = songs.find(song => song.id === songId);

    if (!song) {
        return {
            title: "Song Not Found",
        };
    }

    return {
        title: song.title,
    };
}

export default async function Song({ params }: { params: { songId: string } }) {
    const songs = getSortedSongsData(); // deduped!: we don't have to worry about sending the same request twice ... Next13 will deduped the request since we already got the data
    const { songId } = params;

    if (!songs.find(song => song.id === songId)) {
        return notFound();
    }

    const { title, key, contentHtml, artist, artistCover } = await getSongData(songId);

    // const formattedDate = getFormattedDate(date);

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">
                {artist}: {title} {artistCover ? `(cover: ${artistCover})` : ""}
            </h1>

            {/* <p className="mt-0">{pubDate}</p> */}
            <article>
                {/* <section dangerouslySetInnerHTML={{ __html: contentHtml }} /> */}
                <LyricsWithChords contentHtml={contentHtml} defaultKey={key} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    );
}
