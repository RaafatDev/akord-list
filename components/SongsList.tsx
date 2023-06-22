"use client";
import React from "react";
import ListItem from "./ListItem";

interface Props {
    songs: Song[];
}

export const SongsList = ({ songs }: Props) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const filteredSongs = songs.filter(song => {
        const searchTermToCompare = searchTerm.toLocaleLowerCase();
        return (
            song.title.toLocaleLowerCase().includes(searchTermToCompare) ||
            song.artist.toLocaleLowerCase().includes(searchTermToCompare) ||
            song.artistCover?.toLocaleLowerCase().includes(searchTermToCompare)
        );
    });

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90 mb-3">Songs</h2>
            <input
                className="px-3 py-2 mb-3 w-full text-2xl"
                placeholder="Search by artist name or song title"
                value={searchTerm}
                onChange={onChange}
            />
            <ul className="w-full dark:text-white">
                {filteredSongs.map(song => (
                    <ListItem key={song.id} song={song} />
                ))}
            </ul>
        </section>
    );
};
