import { useState, useEffect } from 'react'
//import Markdown from '~/notes/Icons.md!txt'

export function Notes() {
    //console.info("txt => ", txt);
    const [markdown, setMarkdown] = useState<string>()

    // useEffect(() => {
    //     const fetchMarkdown = async () => {
    //         const data = await fetch(Markdown)
    //         const text = await data.text()
    //         setMarkdown(text)
    //     }
    //
    //     fetchMarkdown()
    //         .catch(console.error)
    // });

    return (
        <div className="flex flex-col w-full h-screen p-2">
            <div className="flex flex-row">
                <span className="text-2xl text-purple-400">Notes</span>
            </div>
        </div>);
}