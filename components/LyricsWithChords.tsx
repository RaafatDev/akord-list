"use client";
import { transpose } from "@/utils/transposer";
// import { TransposeTest } from "@/components/TransposerTest";
import React from "react";

//todo: write a function to figure out the key of the song !!!
//todo: write a function to figure out the key of the song !!!
//todo: write a function to figure out the key of the song !!!
//todo: write a function to figure out the key of the song !!!
const getSongKey = () => {
    console.error("implement a way to find the key of the song dynamically!!");
};

interface Props {
    contentHtml: string;
    defaultKey: string;
}

export const LyricsWithChords = (props: Props) => {
    const preRef = React.useRef(null);

    const songKey = props.defaultKey;

    React.useEffect(() => {
        if (preRef.current) {
            const options = { key: songKey ?? getSongKey() };
            transpose.call([preRef.current], options);
        }
    }, [songKey]);

    const contentString = props.contentHtml
        .replaceAll("<code>", "")
        .replaceAll("</code>", "")
        .replaceAll("<pre>", "")
        .replaceAll("</pre>", "");

    return (
        <pre className="song-text" ref={preRef} style={{ overflow: "auto" }}>
            {contentString}
        </pre>
        // <TransposeTest contentString={contentString} options={options} />
    );
};
