import Link from "next/link";
// import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
    song: Song;
};

export default function ListItem({ song }: Props) {
    const { id, title, key, artist, artistCover } = song;

    // const formattedDate = getFormattedDate(date)

    const coverText = artistCover ? `- (cover: ${artistCover})` : "";
    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/songs/${id}`}>
                {artist}: {title} {coverText}
            </Link>
            <br />
            {/* <p className="text-sm mt-1">{formattedDate}</p> */}
        </li>
    );
}
