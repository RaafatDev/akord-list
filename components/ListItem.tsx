import Link from "next/link";
// import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
    song: Song;
};

export default function ListItem({ song }: Props) {
    const { id, title, key } = song;

    // const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/songs/${id}`}>
                {title}
            </Link>
            <br />
            {/* <p className="text-sm mt-1">{formattedDate}</p> */}
        </li>
    );
}
