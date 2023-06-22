"use client";
import React from "react";
import { transpose } from "@/utils/transposer";
// import { TransposeTest } from "@/components/TransposerTest";

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

    // const options = { key: songKey ?? getSongKey() };

    // return <TransposeTest contentString={contentString} options={options} />;

    return (
        <pre className="song-text" ref={preRef} style={{ overflow: "auto" }}>
            {contentString}
        </pre>
    );
};
