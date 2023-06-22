import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const songsDirectory = path.join(process.cwd(), "songs");

export function getSortedSongsData() {
    // Get file names under /songs
    const fileNames = fs.readdirSync(songsDirectory);
    const allSongsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(songsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the song metadata section
        const matterResult = matter(fileContents);

        const song: Song = {
            id,
            title: matterResult.data.title,
            key: matterResult.data.key,
            artist: matterResult.data.artist,
            artistCover: matterResult.data.artistCover,

            // data: matterResult.data
        };

        // Combine the data with the id
        return song;
    });

    // Sort songs by date
    // return allSongsData.sort((a, b) => (a.date < b.date ? 1 : -1));

    return allSongsData;
}

export async function getSongData(id: string) {
    const fullPath = path.join(songsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the song metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);

    const contentHtml = processedContent.toString();

    const songWithHTML: Song & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        key: matterResult.data.key,
        contentHtml,
        artist: matterResult.data.artist,
        artistCover: matterResult.data.artistCover,
    };

    // Combine the data with the id
    return songWithHTML;
}
